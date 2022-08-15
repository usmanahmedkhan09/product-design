<template>
  <div class="top-bar-container">
    <Navbar />
  </div>
  <div class="content-container">
    <router-view></router-view>
    <!-- <ProductDetail></ProductDetail> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import ProductDetail from "@/components/product-detail.vue";

export default defineComponent({
  components: { Navbar, ProductDetail },
  setup() {
    return {};
  },
});
</script>
