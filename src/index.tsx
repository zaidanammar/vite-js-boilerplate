import * as React from 'react'
import ReactDOM from 'react-dom/client'

// fonts
import '@fontsource-variable/noto-sans'
import '@/lib/styles/globals.css'
import '@/lib/styles/css/index.css'

import App from './App'

import '@/lib/configs/dayjs'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
