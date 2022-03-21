import axios from "axios";
import router from "../../router/router";

const state = {
  products: [],
};
const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return (key) =>
      state.products.filter((element) => {
        return element.key == key;
      });
  },
};
const mutations = {
  updateProductList(state, product) {
    state.products.push(product);
  },
};
const actions = {
  initApp({ commit }) {
    axios
      .get(
        "https://product-operations-59609-default-rtdb.europe-west1.firebasedatabase.app/products.json"
      )
      .then((response) => {
        let data = response.data;
        for (let key in data) {
          data[key].key = key;
          commit("updateProductList", data[key]);
        }
      });
  },
  // eslint-disable-next-line no-unused-vars
  saveProduct({ dispatch, commit, state }, payload) {
    axios
      .post(
        "https://product-operations-59609-default-rtdb.europe-west1.firebasedatabase.app/products.json",
        payload
      )
      .then((response) => {
        payload.key = response.data;
        commit("updateProductList", payload);
        let tradeResult = {
          purchase: payload.price,
          sale: 0,
          count: payload.count,
        };
        dispatch("setTradeResult", tradeResult);
        router.replace("/");
      })
      .catch((e) => console.log(e));
  },
  sellProduct({ dispatch, state }, payload) {
    let product = state.products.filter((element) => {
      return element.key === payload.key;
    });
    if (product) {
      let totalCount = product[0].count - payload.count;
      axios
        .patch(
          "https://product-operations-59609-default-rtdb.europe-west1.firebasedatabase.app/products/" +
            payload.key +
            ".json",
          { count: totalCount }
        )
        .then(() => {
          product[0].count = totalCount;
          let tradeResult = {
            purchase: 0,
            sale: product[0].price,
            count: payload.count,
          };
          dispatch("setTradeResult", tradeResult);
          router.replace("/");
        });
    }
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
