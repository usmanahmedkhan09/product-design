<template>
  <Navbar />
  <!-- <div class="content-container">
    <router-view></router-view>
  </div> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
// import ProductDetail from "@/components/product-detail.vue";

export default defineComponent({
  components: { Navbar },
  setup() {
    return {};
  },
});
</script>
