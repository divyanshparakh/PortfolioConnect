<template>
  <div class="contact">
    <h1>CONTACT PAGE</h1>
    <div class="contact-form"></div>
    <div v-if="Error" class="error">{{ Error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1080px) {
  .contact {
    height: 100%;
    width: 100%;
    padding: 100px 0px 0px 0px;
    background: linear-gradient(
      to right bottom,
      #3103ae,
      #2b04a0,
      #240492,
      #1f0484,
      #190477,
      #15056f,
      #110566,
      #0e055e,
      #0b0659,
      #090654,
      #070650,
      #06054b
    );
    h1 {
      color: #e3507d;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
      font-weight: 600;
      margin-top: 70px;
    }
    &-form {
      margin: auto;
      min-height: 78.4vh; // temp
    }
  }
}
</style>
