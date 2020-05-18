import Main from "./views/Main";
import NewProduct from "./views/NewProduct";
import NoMatch from "./views/NoMatch";
import AddRation from "./views/AddRation";
import Products from "./views/Products";

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
    path: "/add-ration",
    component: AddRation,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "*",
    component: NoMatch,
  },
];

export default routes;
