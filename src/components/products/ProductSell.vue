<template>
  <div class="container">
    <div class="loading" v-show="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="row">
      <div class="col-6 offset-3 pt-3 card mt-5 shadow">
        <div class="card-body">
          <h3>Sell Product</h3>
          <hr />
          <div class="form-group">
            <label>Product Name</label>
            <select
              class="form-control"
              v-model="selectedProduct"
              @change="productSelected"
            >
              <option selected disabled>Please select a product!</option>
              <option
                :disabled="product.count == 0"
                v-for="product in getProducts"
                :key="product.key"
                :value="product.key"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <transition name="slide-fade" mode="out-in">
            <div class="card mb-2 border border-danger" v-if="product !== null">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 text-center">
                    <div class="mb-3">
                      <span class="badge bg-info"
                        >Stock : {{ product.count }}</span
                      >
                      <span class="badge bg-primary"
                        >Price :
                        {{ this.$filters.currencyTL(product.price) }}</span
                      >
                    </div>
                    <p class="border border-warning p-2 text-secondary">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div class="form-group">
            <label>Count</label>
            <input
              type="text"
              class="form-control"
              placeholder="Please enter product count.."
              v-model="productCount"
            />
          </div>
          <hr />
          <button class="btn btn-danger" @click="save" :disabled="saveEnabler">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProductSell",
  data() {
    return {
      selectedProduct: null,
      product: null,
      productCount: null,
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters(["getProducts"]),
    saveEnabler() {
      if (
        this.selectedProduct !== null &&
        this.productCount > 0 &&
        this.product.count >= this.productCount
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    productSelected() {
      this.product = this.$store.getters.getProduct(this.selectedProduct)[0];
    },
    save() {
      let product = {
        key: this.selectedProduct,
        count: this.productCount,
      };
      this.$store.dispatch("sellProduct", product);
      this.isLoading = true;
    },
  },
};
</script>

<style scoped>
.border-danger {
  border-style: dashed !important;
}
</style>
