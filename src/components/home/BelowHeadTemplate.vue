<template>
  <div class="below-head-template">
    <img
      src="@/assets/box-image/skills.jpg"
      class="below-head-template-image"
      alt=""
    />
    <div class="below-head-template-text">
      <div class="below-head-template-text-big">About Skills</div>
      <div class="below-head-template-text-small">
        There are many skills available in every domain
        <br />
        that you think is good for you
      </div>
      <div class="below-head-template-text-small">
        Just Pick and Go with It!
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@media screen and (min-width: 1080px) {
  .below-head-template {
    height: 450px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background-color: whitesmoke;
    margin-top: 100px;
    &-image {
      position: relative;
      bottom: 100px;
      height: 350px;
      width: 300px;
    }
    &-text {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      &-big {
        font-size: 35px;
        color: black;
      }
      &-small {
        margin-top: 20px;
        font-size: 20px;
        color: black;
        text-align: right;
      }
    }
  }
}
</style>
