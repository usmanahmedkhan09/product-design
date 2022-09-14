<template>
  <div class="product">
    <div class="product_images">
      <div class="main_image">
        <img
          :src="getImage(`p-${selectedPic}.jpg`)"
          alt="product-1"
          @click="showImages = true"
        />
      </div>
      <div class="sub_images">
        <div
          v-for="(item, index) in [1, 2, 3, 4]"
          :key="index"
          :class="selectedPic == item ? 'active' : ''"
        >
          <img
            :src="getImage(`p-${item}.jpg`)"
            alt="product-1"
            @click="selectedPic = item"
          />
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
        <button class="btn--primary"><CartIcon /> Add to cart</button>
      </div>
    </div>
  </div>
  <ProductImages v-if="showImages" @close="showImages = false" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PlusIcon from "@/components/icons/IconPlus.vue";
import MinusIcon from "@/components/icons/IconMinus.vue";
import CartIcon from "@/components/icons/IconCart.vue";
import ProductImages from "@/components/product/productImages.vue";

export default defineComponent({
  components: { PlusIcon, MinusIcon, CartIcon, ProductImages },
  setup() {
    const selectedPic = ref(1);
    const showImages = ref(false);
    const getImage = (url: any) => {
      return new URL(`../assets/images/${url}`, import.meta.url).href;
    };
    return {
      getImage,
      selectedPic,
      showImages,
    };
  },
});
</script>
