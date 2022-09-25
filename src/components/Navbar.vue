<template>
  <header>
    <nav class="nav">
      <div class="nav_logos">
        <MenuIcon class="menu_icon" @click="showSidebar = !showSidebar" />
        <Logo />
      </div>

      <ul class="nav_links">
        <li><a href="#">Collections</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="nav_profile">
      <Cart @click="handleCartToggle()" />
      <figure>
        <img src="@/assets/images/image-avatar.png" alt="user image" />
      </figure>
    </div>
    <Sidebar :open="showSidebar" @close="showSidebar = !showSidebar" />
    <UserCart v-if="showCart" />
  </header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Logo from "@/components/icons/IconLogo.vue";
import Cart from "@/components/icons/IconCart.vue";
import UserCart from "@/components/Cart.vue";
import MenuIcon from "./icons/IconMenu.vue";
import Sidebar from "@/components/sidebar.vue";

export default defineComponent({
  components: { Logo, Cart, UserCart, MenuIcon, Sidebar },
  setup() {
    const showCart = ref(false);

    const showSidebar = ref(false);

    const handleCartToggle = () => {
      showCart.value = !showCart.value;
    };
    return { showCart, showSidebar, handleCartToggle };
  },
});
</script>
