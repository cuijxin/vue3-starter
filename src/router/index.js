import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/button"
    },
    {
      path: "/button",
      name: "button",
      component: () =>
        import(
          /* webpackChunkName: "button" */ "../views/AntDesignVue/Button.vue"
        )
    },
    {
      path: "/divider",
      name: "divider",
      component: () =>
        import(
          /* webpackChunkName: "divider" */ "../views/AntDesignVue/Divider.vue"
        )
    },
    {
      path: "/grid",
      name: "grid",
      component: () =>
        import(/* webpackChunkName: "grid" */ "../views/AntDesignVue/Grid.vue")
    },
    {
      path: "/introduce",
      name: "introduce",
      component: () =>
        import(/* webpackChunkName: "introduce" */ "../views/Introduce.vue")
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () =>
        import(/* webpackChunkName: "add" */ "../views/AddGood.vue")
    },
    {
      path: "/swiper",
      name: "swiper",
      component: () =>
        import(/* webpackChunkName: "swiper" */ "../views/Swiper.vue")
    },
    {
      path: "/hot",
      name: "hot",
      component: () =>
        import(/* webpackChunkName: "hot" */ "../views/IndexConfig.vue")
    },
    {
      path: "/new",
      name: "new",
      component: () =>
        import(/* webpackChunkName: "new" */ "../views/IndexConfig.vue")
    },
    {
      path: "/recommend",
      name: "recommend",
      component: () =>
        import(/* webpackChunkName: "recommend" */ "../views/IndexConfig.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () =>
        import(/* webpackChunkName: "category" */ "../views/Category.vue")
    },
    {
      path: "/good",
      name: "good",
      component: () =>
        import(/* webpackChunkName: "good" */ "../views/Good.vue")
    },
    {
      path: "/guest",
      name: "guest",
      component: () =>
        import(/* webpackChunkName: "guest" */ "../views/Guest.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () =>
        import(/* webpackChunkName: "order" */ "../views/Order.vue")
    },
    {
      path: "/account",
      name: "account",
      component: () =>
        import(/* webpackChunkName: "account" */ "../views/Account.vue")
    }
  ]
});

export default router;
