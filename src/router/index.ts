import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/Welcome/WelcomeView.vue"),
  },
  {
    path: "/demos/delivery",
    component: () => import("../views/Projects/DeliveryDemoView.vue")
  },
  {
    path: "/demos/retail",
    component: () => import("../views/Projects/RetailDemoView.vue")
  },
  {
    path: "/demos/healthcare",
    component: () => import("../views/Projects/HealthCareDemoView.vue")
  },
  {
    path: "/demos/lottery",
    component: () => import("../views/Projects/LotteryDemoView.vue")
  },
  //   path: "/",
  //   component: () => import("../layouts/SideBarLayout.vue"),
  //   children: [
  //     {
  //       path: "/",
  //       component: () => import("../views/Welcome/WelcomeView.vue"),
  //     },
  //     {
  //       path: "/deliverydemo",
  //       component: () => import("../views/Projects/DeliveryDemoView.vue"),
  //     },
  //     {
  //       path: "/healthcaredemo",
  //       component: () => import("../views/Projects/HealthCareDemoView.vue"),
  //     },
  //     {
  //       path: "/retaildemo",
  //       component: () => import("../views/Projects/RetailDemoView.vue"),
  //     },
  //     {
  //       path: "/lotterydemo",
  //       component: () => import("../views/Projects/LotteryDemoView.vue"),
  //     },
  //     {
  //       path: "/musictaste",
  //       component: () => import("../views/Hobbies/MusicView.vue"),
  //     },
  //     {
  //       path: "/illustratorlife",
  //       component: () => import("../views/Hobbies/IllustrationView.vue"),
  //     }
  //   ]
  // },
  // {
  //   path: "/",
  //   component: () => import("../layouts/BlankLayout.vue"),
  //   children: [
  //     {
  //       path: "/",
  //       component: () => import("../views/NotFound.vue")
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
