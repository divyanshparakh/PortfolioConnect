<template>
  <div class="head-template">
    <img
      src="../../assets/brand/BrandLogo.png"
      v-if="this.$store.state.User.IsLoggedIn"
      class="head-template-logo"
    />
    <div class="head-template-text">
      <div class="head-template-text-big">
        Showcase your Talent like never before
      </div>
      <div class="head-template-text-small">Flex your Skills Here</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media screen and (min-width: 1080px) {
  .head-template {
    position: sticky;
    top: 0;
    height: 100vh;
    color: whitesmoke;
    background: no-repeat center top
      url("../../assets/background-image/971.jpg");
    background-size: 100% 100%;
    background-blend-mode: soft-light;
    &-logo {
      display: block;
      height: 250px;
      margin: auto;
      position: relative;
      top: 70px;
      // animation: <animation-name> <animation-duration> <animation-iteration-count>
      animation: bounceIn 1.2s ease-out;
      transition: all 0.4s cubic-bezier(0.8, 1.8, 0.75, 0.75);
      cursor: pointer;
      transition-duration: 0.6s;
      &:hover {
        transform: rotate(5deg) scale(1.05);
        transition-duration: 0.4s;
      }
      @keyframes bounceIn {
        0% {
          opacity: 1;
          transform: scale(0.3);
        }

        50% {
          opacity: 1;
          transform: scale(1.05);
        }

        70% {
          opacity: 1;
          transform: scale(0.9);
        }

        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    }
    &-text {
      &-big {
        position: relative;
        top: 200px;
        font-size: 3em;
        text-shadow: 1px 3px 2px #c2bdbd;
      }
      &-small {
        font-size: 2em;
      }
    }
  }
}
</style>
