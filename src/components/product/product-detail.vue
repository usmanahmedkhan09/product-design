<template>
  <div class="product">
    <div class="product_images">
      <div class="main_image">
        <img
          :src="getImage(`p-${selectedPic}.jpg`)"
          alt="product-1"
          @click="handleShowImages()"
        />
        <div class="icon_container rightArrow">
          <NextIcon class="icon" @click="nextImage()" />
        </div>
        <div class="icon_container leftArrow">
          <PreviousIcon class="icon" @click="previousImage()" />
        </div>
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
            @click="handleSelectedImage(item)"
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
          <MinusIcon @click="decrmentQuantity()" />
          <p>{{ quantity }}</p>
          <PlusIcon @click="incrmentQuantity()" />
        </div>
        <button class="btn--primary"><CartIcon /> Add to cart</button>
      </div>
    </div>
  </div>
  <ProductImages v-if="showImages" @close="showImages = false" />
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import PlusIcon from "@/components/icons/IconPlus.vue";
import MinusIcon from "@/components/icons/IconMinus.vue";
import CartIcon from "@/components/icons/IconCart.vue";
import ProductImages from "@/components/product/productImages.vue";
import NextIcon from "../icons/IconNext.vue";
import PreviousIcon from "../icons/IconPrevious.vue";

export default defineComponent({
  components: {
    PlusIcon,
    MinusIcon,
    CartIcon,
    ProductImages,
    NextIcon,
    PreviousIcon,
  },
  setup() {
    const selectedPic = ref(1);

    const showImages = ref(false);

    let innerWidth = ref(window.innerWidth);

    let quantity = ref(0);

    const handleSelectedImage = (image: any) => {
      selectedPic.value = image;
    };

    const handleShowImages = () => {
      if (window.innerWidth > 375) {
        showImages.value = true;
      }
    };

    watch([innerWidth], (innerWidth: any) => {
      if (innerWidth <= 375) {
        console.log("hererererrer");
        showImages.value = false;
      }
    });

    const getImage = (url: any) => {
      return new URL(`../../assets/images/${url}`, import.meta.url).href;
    };

    const nextImage = () => {
      if (selectedPic.value > 0 && selectedPic.value < 4) {
        selectedPic.value++;
      }
    };

    const previousImage = () => {
      if (selectedPic.value > 1 && selectedPic.value <= 4) {
        selectedPic.value--;
      }
    };

    const decrmentQuantity = () => {
      if (quantity.value > 0) quantity.value--;
    };

    const incrmentQuantity = () => {
      quantity.value++;
    };

    return {
      innerWidth,
      getImage,
      selectedPic,
      showImages,
      handleSelectedImage,
      handleShowImages,
      previousImage,
      nextImage,
      decrmentQuantity,
      incrmentQuantity,
      quantity,
    };
  },
});
</script>
