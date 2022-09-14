<template>
  <div class="cart_container">
    <div class="cart_header">Cart</div>
    <div class="cart_content">
      <div class="product_detail">
        <figure>
          <img src="@/assets/images/p-1.jpg" alt="" srcset="" />
        </figure>
        <p>
          Fall Limited Edition Sneakers
          <span> $125.00 * 3 <strong>$375.00</strong> </span>
        </p>
        <Trash />
      </div>
      <button class="btn--primary full-width">Checkout</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Trash from "@/components/icons/IconTrash.vue";

export default defineComponent({
  components: { Trash },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
