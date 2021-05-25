import Home from "./src/Views/Home.vue";
import Shapes from "./src/Views/NewShapes.vue";
import Page2 from "./src/Views/page2.vue";
import Arienti from "./src/Views/Arienti.vue";
import Bolgoda from "./src/Views/Bolgoda.vue";
import StoneHouse from "./src/Views/StoneHouse.vue";
import ChitraLane from "./src/Views/ChitraLane.vue";
import DamindraHouse from "./src/Views/DamindraHouse.vue";
import DinaliHouse from "./src/Views/DinaliHouse.vue";
import ChamikaHouse from "./src/Views/ChamikaHouse.vue";
import Maniumpathy from "./src/Views/Maniumpathy.vue";
import PreLoader from "./src/components/PreLoader.vue";
import Hanthana from "./src/Views/Hanthana.vue";
// import BluePrint from "./src/Views/BluePrint/blu.vue";
import BluePrint from "./src/Views/BluePrint.vue";
import test from "./src/Views/testVue.vue";

export default [
  {
    path: "/test",
    component: test,
  },
  {
    path: "/pre",
    component: PreLoader,
  },

  {
    path: "/BluePrint",
    component: BluePrint,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Shapes,
  },
  {
    path: "/page2",
    component: Page2,
  },
  {
    path: "/Arienti",
    component: Arienti,
  },
  {
    path: "/Bolgoda",
    component: Bolgoda,
  },
  {
    path: "/StoneHouse1",
    component: StoneHouse,
  },
  {
    path: "/ChitraLane",
    component: ChitraLane,
  },
  {
    path: "/DamindraHouse",
    component: DamindraHouse,
  },
  {
    path: "/DinaliHouse",
    component: DinaliHouse,
  },
  {
    path: "/ChamikaHouse",
    component: ChamikaHouse,
  },
  {
    path: "/Maniumpathy1",
    component: Maniumpathy,
  },
  {
    path: "/Hanthana",
    component: Hanthana,
  },
];
