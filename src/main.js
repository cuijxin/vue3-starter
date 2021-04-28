import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { Slider, Col, Row, Divider, Dropdown, Button, Layout, Menu, Breadcrumb, Card, Avatar, List, ConfigProvider, Radio } from 'ant-design-vue'
import './assets/app.scss'
import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'

const app = createApp(App)

app.use(router)

app
  .use(Dropdown)
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(Breadcrumb)
  .use(Card)
  .use(Avatar)
  .use(List)
  .use(ConfigProvider)
  .use(Radio)
  .use(Divider)
  .use(Col)
  .use(Row)
  .use(Slider)
app.mount('#app')
