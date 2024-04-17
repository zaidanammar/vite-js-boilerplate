import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Form, Input, Spin, Typography } from 'antd'
import { createStyles } from 'antd-style'

import InputItem from '@/lib/components/shared/DataEntry/InputItem'
import Logo from '@/lib/components/shared/Layout/logo'
import { useLoginPage } from '@/lib/hooks/auth/useLoginPage'

const useStyles = createStyles({
  rootContainer: {
    backgroundImage: 'url("/images/auth-page-bg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100dvh',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: '0 1.5rem',
  },
  cardContainer: {
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundImage:
      'radial-gradient(circle at 93% 1e+02%, rgba(22,119,255,0.17) 0%, rgba(255,255,255,0.05) 23%, rgba(255,255,255,0.03) 87%, rgba(22,119,255,0.12) 109%)',
    boxShadow: '0px 0px 24px 0px rgba(0,0,0,0.1)',
  },
  subtitleText: {
    textAlign: 'center',
    color: 'gray',
  },
  formWrapper: {
    width: '100%',
  },
})

const LoginPage = () => {
  const { styles, cx } = useStyles()
  const { handleLogin, form, isLoadingSubmitLogin } = useLoginPage()

  return (
    <div className={cx(styles.rootContainer)}>
      <Card className={styles.cardContainer}>
        <Flex vertical gap={12} align="center">
          <Logo />

          <Typography.Text className={styles.subtitleText}>
            Selamat Datang, silakan masukkan akun anda untuk melanjutkan!
          </Typography.Text>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleLogin}
            className={styles.formWrapper}
          >
            <Spin spinning={isLoadingSubmitLogin}>
              <InputItem
                name="email"
                label="Email"
                rules={[{ required: true, type: 'email' }]}
                fullWidth
              >
                <Input prefix={<UserOutlined />} placeholder="Masukkan email" />
              </InputItem>
              <InputItem
                label="Kata Sandi"
                name="password"
                rules={[{ required: true }]}
                fullWidth
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Masukkan kata sandi"
                />
              </InputItem>
              <Button block type="primary" size="middle" htmlType="submit">
                Masuk
              </Button>
            </Spin>
          </Form>
        </Flex>
      </Card>
    </div>
  )
}

export default LoginPage
