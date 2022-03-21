<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5 card mt-5 shadow">
        <div class="card-body">
          <h3>Product List</h3>
          <hr />
          <table
            class="table table-hover table-striped table-bordered"
            v-if="getProducts.length > 0"
          >
            <thead>
              <th>id</th>
              <th>Product Name</th>
              <th>Count</th>
              <th>Price</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr v-for="product in getProducts" :key="product">
                <td class="align-middle text-center">
                  <span class="badge bg-info"> {{ product.key }} </span>
                </td>
                <td class="align-middle text-center">{{ product.title }}</td>
                <td
                  class="align-middle text-center"
                  :class="countClass(product.count)"
                >
                  {{ product.count }}
                </td>
                <td style="width: 120px">
                  {{ this.$filters.currencyTL(product.price) }}
                </td>
                <td class="align-middle">{{ product.description }}</td>
              </tr>
            </tbody>
          </table>
          <div class="alert alert-warning" v-else>
            <strong>We Haven't Found Any Entry Here Yet </strong>
            <br />
            <small
              >You can use the "Product Operations" menu to add an entry.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters(["getProducts"]),
  },
  methods: {
    countClass(count) {
      return {
        "bg-danger text-white": count == 0,
        "bg-success text-white": count > 0,
      };
    },
  },
};
</script>

<style scoped></style>
