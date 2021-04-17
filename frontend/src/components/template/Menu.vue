<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
    
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Menu',
  // Map an array with all state attributes into my component
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
  .menu {
      grid-area: menu;
      background: linear-gradient(to right, #232526, #414345);
      color: #333;

      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
  }
</style>