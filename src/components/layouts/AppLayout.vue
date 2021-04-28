<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        v-model:selectedKeys="selectedKeys"
      >
        <a-menu-item key="1">Dashboard</a-menu-item>
        <a-menu-item key="2">首页配置</a-menu-item>
        <a-menu-item key="3">模块管理</a-menu-item>
        <a-menu-item key="4">系统管理</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout class="container">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
        > <a-sub-menu key="1">
          <template #title>
            <span>
              <container-outlined/>
              General
            </span>
          </template>
          <a-menu-item key="button"><router-link to="/button">按钮</router-link></a-menu-item>
          <a-menu-item key="divider"><router-link to="/divider">分割线</router-link></a-menu-item>
          <a-menu-item key="grid"><router-link to="/grid">栅格</router-link></a-menu-item>
        </a-sub-menu>
          <a-sub-menu key="2">
            <template #title>
              <span>
                <dashboard-outlined/>
                Dashboard
              </span>
            </template>
            <a-menu-item key="introduce"><router-link to="/introduce">系统介绍</router-link></a-menu-item>
            <a-menu-item key="dashboard"><router-link to="/dashboard">Dashboard</router-link></a-menu-item>
            <a-menu-item key="add"><router-link to="/add">添加商品</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="3">
            <template #title>
              <span>
                <home-outlined/>
                首页配置
              </span>
            </template>
            <a-menu-item key="swiper"><router-link to="/swiper">轮播图配置</router-link></a-menu-item>
            <a-menu-item key="hot"><router-link to="/hot">热销商品配置</router-link></a-menu-item>
            <a-menu-item key="new"><router-link to="/new">新品上线配置</router-link></a-menu-item>
            <a-menu-item key="recommend"><router-link to="/recommend">为你推荐配置</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="4">
            <template #title>
              <span>
                <appstore-outlined/>
                模块管理
              </span>
            </template>
            <a-menu-item key="category"><router-link to="/category">分类管理</router-link></a-menu-item>
            <a-menu-item key="good"><router-link to="/good">商品管理</router-link></a-menu-item>
            <a-menu-item key="guest"><router-link to="/guest">会员管理</router-link></a-menu-item>
            <a-menu-item key="order"><router-link to="/order">订单管理</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="5">
            <template #title>
              <span>
                <setting-outlined/>
                系统管理
              </span>
            </template>
            <a-menu-item key="account"><router-link to="/account">修改密码</router-link></a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0 }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>

import { reactive,toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { ContainerOutlined, DashboardOutlined, HomeOutlined, AppstoreOutlined,SettingOutlined   } from '@ant-design/icons-vue'
export default {
    name: 'AppLayout',
    components: {
      ContainerOutlined,
        DashboardOutlined,
        HomeOutlined,
        AppstoreOutlined,
        SettingOutlined
    },
    setup() {
        const router = useRouter()
        const state = reactive({
          selectedKeys: ['1'],
          openKeys: ['dashboard'],
          preOpenKeys: ['dashbaord'],
        });
        router.beforeEach((to) => {
          state.currentPath = to.path
        })
        return {
            ...toRefs(state),
        };
     },
};

</script>

<style>
  .layout {
    background-color: #ffffff;
  }
  .container {
    background-color: #ffffff;
  }
#components-layout-demo-top-side-2 .logo {
  float:left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>