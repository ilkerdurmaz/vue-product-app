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
          <h3>Product Operations</h3>
          <hr />
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insert Name.."
              v-model="product.title"
            />
          </div>
          <div class="form-group">
            <label>Count</label>
            <input
              type="number"
              class="form-control"
              placeholder="Insert Count.."
              v-model="product.count"
            />
          </div>
          <div class="form-group">
            <label>Price</label>
            <input
              type="number"
              class="form-control"
              placeholder="Insert Price.."
              v-model="product.price"
            />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Insert Description..."
              class="form-control"
              v-model="product.description"
            ></textarea>
          </div>
          <hr />
          <button
            class="btn btn-primary"
            @click="saveProduct"
            :disabled="saveEnabler"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPurchase",
  data() {
    return {
      product: {
        title: "",
        count: null,
        price: null,
        description: "",
      },
      isLoading: false,
    };
  },
  methods: {
    saveProduct() {
      this.$store.dispatch("saveProduct", this.product);
      this.isLoading = true;
    },
  },
  computed: {
    saveEnabler() {
      if (
        this.product.title.length > 0 &&
        this.product.count > 0 &&
        this.product.price > 0
      )
        return false;
      else return true;
    },
  },
};
</script>

<style scoped></style>
