import setupApp from './app'

import '@klinecharts/pro/dist/klinecharts-pro.css'
import './index.css'

setupApp(document.querySelector<HTMLDivElement>('#app')!)
