import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/components/products/ProductList";
import ProductPurchase from "@/components/products/ProductPurchase";
import ProductSell from "@/components/products/ProductSell";

const routes = [
  {
    path: "/",
    component: ProductList,
  },
  {
    path: "/product-operations",
    component: ProductPurchase,
  },
  {
    path: "/product-sell",
    component: ProductSell,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ProductList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
