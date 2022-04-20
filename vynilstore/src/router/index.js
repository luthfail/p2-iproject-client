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
  ],
});

router.beforeEach((to, from, next) => {
  const authentication = localStorage.getItem("access_token")
  if (to.name === 'login' && authentication) next({ name: 'home' })
  else if (to.name === 'register' && authentication) next({ name: 'home' })
  else next()
})

export default router;
