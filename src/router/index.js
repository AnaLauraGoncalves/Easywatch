import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import informacoesPage from "../views/Informacoes.vue";
import DistroQuiz from "../views/DistroQuiz.vue";
import RankingPage from "../components/RankingPage.vue";
import ViewDistros from "../views/ViewDistros.vue";
import Alternative from './../views/Alternative.vue';

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
      path: "/informacoes/:distroname",
      name: "info",
      component: informacoesPage,
    },
    {
      path: "/DistroQuiz.vue",
      name: "quiz",
      component: DistroQuiz,
    },

    {
      path: "/ranks",
      name: "ranks",
      component: RankingPage,
    },

    {
      path: "/ViewDistros.vue",
      name: "view-distros",
      component: ViewDistros,
    },

    {
      path: "/Alternative.vue",
      name: "alternative-software",
      component: Alternative,
    },

  ],
});

export default router;
