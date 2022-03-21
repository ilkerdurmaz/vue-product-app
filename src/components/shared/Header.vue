<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark"
    style="background-color: #563f7a"
  >
    <router-link custom to="/" v-slot="{ navigate }">
      <a class="navbar-brand" @click="navigate" role="button">Product List</a>
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            custom
            to="/product-operations"
            v-slot="{ navigate, isActive }"
          >
            <a
              class="nav-link"
              @click="navigate"
              role="button"
              :active="isActive"
              >Product Operations</a
            >
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            custom
            to="/product-sell"
            v-slot="{ navigate, isActive }"
          >
            <a
              class="nav-link"
              @click="navigate"
              role="button"
              :active="isActive"
              >Product Sell</a
            >
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>
<style scoped></style>
