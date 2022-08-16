<template>
  <nav class="navbar">
    <div class="nav_links">
      <!-- <figure class="nav_logo"></figure> -->
      <ul>
        <li><Logo /></li>
        <li><a href="#">Collections</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div class="nav_profile">
      <ul>
        <li>
          <Cart />
        </li>
        <li>
          <figure>
            <img src="@/assets/images/image-avatar.png" alt="user image" />
          </figure>
        </li>
      </ul>
    </div>
  </nav>
  <!-- <hr /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Logo from "@/components/icons/IconLogo.vue";
import Cart from "@/components/icons/IconCart.vue";

export default defineComponent({
  components: { Logo, Cart },
  setup() {
    return {};
  },
});
</script>
