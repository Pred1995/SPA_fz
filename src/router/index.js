import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/v-main-layout.vue")
    },
    {
      path: "*",
      component: { render: (h) => h("div", ["404! Страница не найдена!"]) },
    }
  ]
})
