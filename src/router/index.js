import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InformacoesPage from "../views/Informacoes.vue";
import DistroQuiz from "../views/DistroQuiz.vue";
import RankingPage from "../components/RankingPage.vue";
import ViewDistros from "../views/ViewDistros.vue";
import Alternative from "./../views/Alternative.vue";
import AboutView from "./../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Informacoes/:distroname",
      name: "info",
      component: InformacoesPage,
    },
    {
      path: "/Quiz",
      name: "quiz",
      component: DistroQuiz,
    },

    {
      path: "/ranks",
      name: "ranks",
      component: RankingPage,
    },

    {
      path: "/ViewDistros",
      name: "view-distros",
      component: ViewDistros,
    },

    {
      path: "/Alternative",
      name: "alternative-software",
      component: Alternative,
    },
    {
      path: "/About",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
