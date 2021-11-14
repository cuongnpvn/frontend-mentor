import Accordion from "@/views/work/Accordion.vue";
import TipCalculator from "@/views/work/TipCalculator.vue";
import Todo from "@/views/work/Todo.vue";
import IPTracking from "@/views/work/IPTracking.vue";
import Country from "@/views/work/Country/Country.vue";
import CountryInfo from "@/views/work/Country/CountryInfo.vue";
import SpaceTourism from "@/views/work/SpaceTourism/Home.vue";
import SpaceTourismDestination from "@/views/work/SpaceTourism/Destination.vue";
import SpaceTourismCrew from "@/views/work/SpaceTourism/Crew.vue";
import SpaceTourismTechnology from "@/views/work/SpaceTourism/Technology.vue";

const routes = [
  {
    path: "/work/accordion",
    name: "Accordion",
    component: Accordion,
  },
  {
    path: "/work/tipcalculator",
    name: "TipCalculator",
    component: TipCalculator,
  },
  {
    path: "/work/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/work/iptracking",
    name: "IPTracking",
    component: IPTracking,
  },
  {
    path: "/work/country",
    name: "Country",
    component: Country,
  },
  {
    path: "/work/country/:code",
    name: "CountryInfo",
    component: CountryInfo,
    props: true,
  },
  {
    path: "/work/spacetourism",
    name: "SpaceTourism",
    component: SpaceTourism,
  },
  {
    path: "/work/spacetourism/destination",
    name: "SpaceTourismDestination",
    component: SpaceTourismDestination,
  },
  {
    path: "/work/spacetourism/crew",
    name: "SpaceTourismCrew",
    component: SpaceTourismCrew,
  },
  {
    path: "/work/spacetourism/technology",
    name: "SpaceTourismTechnology",
    component: SpaceTourismTechnology,
  },
];

export default routes;
