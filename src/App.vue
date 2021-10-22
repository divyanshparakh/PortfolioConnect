<template>
  <navigation-bar></navigation-bar>
  <router-view />
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Courier New", "Georgia", "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
* {
  padding: 0;
  margin: 0;
  text-rendering: optimizeSpeed;
  outline: none;
  user-select: none;
  &:focus {
    outline: none;
  }
}
</style>
