<template>
  <div class="product">
    <div class="product_images">
      <div class="main_image">
        <img src="@/assets/images/p-1.jpg" alt="product-1" />
      </div>
      <div class="sub_images">
        <div>
          <img src="@/assets/images/p-1.jpg" alt="product-1" />
        </div>
        <div>
          <img src="@/assets/images/p-2.jpg" alt="product-2" />
        </div>
        <div>
          <img src="@/assets/images/p-3.jpg" alt="product-3" />
        </div>
        <div>
          <img src="@/assets/images/p-4.jpg" alt="product-4" />
        </div>
      </div>
    </div>
    <div class="product_info">
      <div class="title">SNEAKER COMPANY</div>
      <h1 class="subtitle">Fall Limited Edition Sneaker</h1>
      <p class="product_description">
        These low-profile sneakers are your prefect casual wear
        companines.Featuring a durable rubber outer sole, they'll with stand
        everything the weather can offer.
      </p>
      <p class="product_price">$125.00 <span>50%</span></p>
      <p class="product_discount">$250.00</p>
      <div class="buttons">
        <div class="cart_counter">
          <MinusIcon />
          <p>0</p>
          <PlusIcon />
        </div>
        <button class="btn cart_btn"><CartIcon /> Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PlusIcon from "@/components/icons/IconPlus.vue";
import MinusIcon from "@/components/icons/IconMinus.vue";
import CartIcon from "@/components/icons/IconCart.vue";
export default defineComponent({
  components: { PlusIcon, MinusIcon, CartIcon },
  setup() {
    return {};
  },
});
</script>
