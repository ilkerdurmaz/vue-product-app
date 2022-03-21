<template>
  <div>
    <appHeader></appHeader>
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" transition>
        <component :is="Component" />
      </transition>
    </router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("initApp");
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
