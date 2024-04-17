import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

import PageLayout from '@/lib/components/shared/Layout/PageLayout'

const Page404 = () => {
  return (
    <PageLayout>
      <Result
        status="404"
        title="Halaman Tidak Ditemukan"
        subTitle="Maaf, halaman yang Anda kunjungi tidak ada"
        extra={[
          <Link to="/" key="back-button">
            <Button>Kembali</Button>
          </Link>,
        ]}
      />
    </PageLayout>
  )
}

export default Page404
