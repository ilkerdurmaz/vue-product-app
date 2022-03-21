import { createStore } from "vuex";
import product from "@/store/modules/product";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

export default createStore({
  state: {
    purchase: 0.0,
    sale: 0.0,
    balance: 0.0,
  },
  modules: {
    product,
  },
  getters,
  mutations,
  actions,
});
