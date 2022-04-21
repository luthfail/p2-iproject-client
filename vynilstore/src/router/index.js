import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/RegisterPage.vue"),
    },
    {
      path: "/detail/:id",
      name: "Details",
      component: () => import("../views/DetailPage.vue"),
    },
    {
      path: "/my-cart",
      name: "MyCart",
      component: () => import("../views/MyCart.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authentication = localStorage.getItem("access_token")
  if (to.name === 'Login' && authentication) next({ name: 'Home' })
  else if (to.name === 'Register' && authentication) next({ name: 'Home' })
  else if (to.name === 'Home' && !authentication) next({ name: 'Login' })
  else if (to.name === 'Details' && !authentication) next({ name: 'Login' })
  else if (to.name === 'MyCart' && !authentication) next({ name: 'Login' })
  else next()
})

export default router;
