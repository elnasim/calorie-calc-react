import Main from "./views/Main";
import NewProduct from "./views/NewProduct";
import NoMatch from "./views/NoMatch";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/new-product",
    component: NewProduct,
  },
  {
    path: "*",
    component: NoMatch,
  },
];

export default routes;
