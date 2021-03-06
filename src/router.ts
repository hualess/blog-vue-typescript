import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
        // @ts-ignore
      component: () => import(/* webpackChunkName: "home" */ "./views/home2.vue")
    },
    // {
    //   path: "/home2",
    //   name: "home2",
    //   component: () => import(/* webpackChunkName: "home2" */ "./views/home2.vue")
    // },
    {
      path: "/articles",
      name: "articles",
      // route level code-splitting
      // this generates a separate chunk (articles.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "articles" */ "./views/articles.vue")
    },
    {
      path: "/archive",
      name: "archive",
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "archive" */ "./views/archive.vue")
    },
    {
      path: "/timeline",
      name: "timeline",
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "timeline" */ "./views/timeline.vue")
    },
    {
      path: "/project",
      name: "project",
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "project" */ "./views/project.vue")
    },
    {
      path: "/message",
      name: "message",
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "message" */ "./views/message.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "about" */ "./views/articleDetail.vue")
    },
    {
      path: "/articleDetail",
      name: "articleDetail",
      component: () =>
          // @ts-ignore
        import(/* webpackChunkName: "articleDetail" */ "./views/articleDetail.vue")
    }
    // {
    //   path: "*",
    //   redirect: {
    //     name: "home"
    //   }
    // }
  ]
});
