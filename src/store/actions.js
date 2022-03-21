import axios from "axios";

export const setTradeResult = ({ state, commit }, tradeResult) => {
  commit("updateTradeResult", tradeResult);
  let tradeData = {
    purchase: state.purchase,
    sale: state.sale,
  };
  axios
    .put(
      "https://product-operations-59609-default-rtdb.europe-west1.firebasedatabase.app/trade-result.json",
      tradeData
    )
    .then((response) => {
      console.log(response);
    });
};

export const getTradeResult = ({ commit }) => {
  axios
    .get(
      "https://product-operations-59609-default-rtdb.europe-west1.firebasedatabase.app/trade-result.json"
    )
    .then((response) => {
      commit("updateTradeResult", response.data);
    });
};
