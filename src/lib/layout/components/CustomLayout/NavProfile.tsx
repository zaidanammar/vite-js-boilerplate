import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Flex, Typography } from 'antd'
import { createStyles } from 'antd-style'
import { useNavigate } from 'react-router-dom'

import { neutralColor, primaryColor } from '@/lib/constants/colors'
import { loginPath } from '@/lib/constants/routes'
import { useGetProfileDetail } from '@/lib/services/api/user-services/profile/getDetail'
import { useAuth } from '@/lib/stores/auth'

const useStyles = createStyles({
  profileInfo: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '@media screen and (max-width: 992px)': {
      display: 'none',
    },
  },
  subtitle: {
    fontSize: '0.75rem',
  },
  logoutButton: {
    marginLeft: '20px',
  },
  avatar: {
    backgroundColor: primaryColor['main'],
    color: neutralColor['10'],
  },
})

const NavProfile = () => {
  const navigate = useNavigate()
  const { styles } = useStyles()
  const { clearAuth, token } = useAuth()
  const { data: profileData } = useGetProfileDetail({
    enabled: !!token,
  })

  const handleLogout = () => {
    clearAuth()
    navigate(loginPath)
  }

  return (
    <>
      <Flex align="center" gap={8}>
        <Avatar icon={<UserOutlined />} className={styles.avatar} />
        <Flex vertical align="start" className={styles.profileInfo}>
          <Typography.Text strong>{profileData?.full_name}</Typography.Text>
          <Typography.Text className={styles.subtitle}>
            {profileData?.role?.name}
          </Typography.Text>
        </Flex>
        <Button
          className={styles.logoutButton}
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </>
  )
}

export default NavProfile
