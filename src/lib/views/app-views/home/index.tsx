import { Result } from 'antd'

import PageLayout from '@/lib/components/shared/Layout/PageLayout'
import { useAuth } from '@/lib/stores/auth'

const Home = () => {
  const { userDetail } = useAuth()

  return (
    <PageLayout>
      <Result
        title={`Hai, ${userDetail.fullname || 'User'}!`}
        subTitle="Selamat datang kembali di dashboard"
        icon={<img src="/images/Onboarding-rafiki.png" width="240px" />}
      />
    </PageLayout>
  )
}

export default Home
