import { Helmet } from 'react-helmet'

const APP_NAME = 'posy-resto-admin-panel'

const Meta = () => {
  return (
    <Helmet>
      <title>Posy Resto Admin Panel</title>
      <meta name="description" content="Posy Resto Admin Panel" />

      <meta name="application-name" content={APP_NAME} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={APP_NAME} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#FFFFFF" />

      <link rel="shortcut icon" href="/images/favicon.png" />
    </Helmet>
  )
}

export default Meta
