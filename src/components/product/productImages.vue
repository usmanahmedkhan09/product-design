<template>
  <div class="images_container">
    <div class="product detail">
      <div class="product_images">
        <div class="main_image">
          <img :src="getImage(`p-${selectedPic}.jpg`)" alt="product-1" />
          <div class="header_icon">
            <CrossIcon class="cross_icon" @click="$emit('close')" />
          </div>
          <div class="icon_container nextIcon">
            <NextIcon @click="nextImage()" />
          </div>
          <div class="icon_container previousIcon">
            <PreviousIcon @click="previousImage()" />
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
              @click="selectedPic = item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import CrossIcon from "../icons/IconCross.vue";
import NextIcon from "../icons/IconNext.vue";
import PreviousIcon from "../icons/IconPrevious.vue";

export default defineComponent({
  components: { CrossIcon, NextIcon, PreviousIcon },
  setup(context) {
    const selectedPic = ref(1);
    const showImages = ref(true);

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

    return {
      getImage,
      nextImage,
      previousImage,
      selectedPic,
      showImages,
    };
  },
});
</script>
