<template>
  <div class="sidebar" :class="open ? 'open' : ''">
    <aside>
      <div>
        <CloseIcon @click="$emit('close')" />
        <ul class="links">
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </aside>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CloseIcon from "./icons/IconCross.vue";

export default defineComponent({
  components: { CloseIcon },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
