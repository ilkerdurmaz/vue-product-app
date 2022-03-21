<template>
  <nav
    class="navbar fixed-bottom navbar-light"
    style="background-color: #e3f2fd"
  >
    <span class="navbar-text mr-auto">
      <strong>Product Operations</strong> | İlker Durmaz
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Purchase : </strong>
      <span class="badge bg-danger">{{
        this.$filters.currencyTL(getTradeResult.purchase)
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Sale : </strong>
      <span class="badge bg-success">{{
        this.$filters.currencyTL(getTradeResult.sale)
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Balance : </strong>
      <span class="badge bg-primary">{{
        this.$filters.currencyTL(getTradeResult.balance)
      }}</span>
    </span>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  computed: mapGetters(["getTradeResult"]),
};
</script>

<style scoped></style>
