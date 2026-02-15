import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n'
import './index.css'

import logoIco from '@/assets/images/logo.ico'

const favicon = document.getElementById('favicon') as HTMLLinkElement
if (favicon) {
  favicon.href = logoIco
  favicon.type = 'image/x-icon'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
