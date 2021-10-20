<template>
  <div class="home">
    <auth v-if="IsLoggedIn == false"></auth>
    <head-template></head-template>
    <below-head-template v-if="IsLoggedIn"></below-head-template>
    <last-bar v-if="IsLoggedIn"></last-bar>
    <just-a-image></just-a-image>
    <basic-info></basic-info>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Auth from "../components/auth/Auth";
import HeadTemplate from "../components/home/HeadTemplate";
import BelowHeadTemplate from "../components/home/BelowHeadTemplate.vue";
import LastBar from "../components/home/LastBar";
import BasicInfo from "../components/home/BasicInfo.vue";
import JustAImage from "../components/home/JustAImage.vue";

export default {
  name: "Home",
  components: {
    LastBar,
    Auth,
    HeadTemplate,
    BelowHeadTemplate,
    BasicInfo,
    JustAImage,
  },
  computed: {
    ...mapGetters(["IsLoggedIn"]),
  },
};
</script>
