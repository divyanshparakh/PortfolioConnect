<template>
  <div class="LastBar">
    <div class="SocialMedias">
      <p class="title">Our Social Media Presence :-</p>
      <ul>
        <li>
          <a href="https://in.linkedin.com/" target="_blank"
            ><img src="@/assets/social-media/001-linkedin.png" title="LinkedIn"
          /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank"
            ><img
              src="@/assets/social-media/002-instagram.png"
              title="Instagram"
          /></a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank"
            ><img src="@/assets/social-media/003-twitter.png" title="Twitter"
          /></a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/" target="_blank"
            ><img src="@/assets/social-media/004-youtube.png" title="Youtube"
          /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank"
            ><img src="@/assets/social-media/005-facebook.png" title="Facebook"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped media="screen">
.LastBar {
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  margin: auto;
  .SocialMedias {
    padding: 150px 0px 400px 10px;
    .title {
      font-size: 24px;
      margin-top: 60px;
    }
    ul {
      display: flex;
      flex-flow: row;
      li {
        a {
          margin: 30px;
          img {
            width: 100px;
            height: 80px;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1080px) {
  .LastBar {
    height: 150px;
    justify-content: space-around;
    padding-top: 35px;
    font-size: 50px;
    font-weight: 600;
    .SocialMedias {
      ul {
        li {
          list-style-type: none;
          margin: 0 30px;
          img {
            position: relative;
            top: 120px;
            height: 200px;
            width: 300px;
          }
        }
      }
    }
  }
}
</style>
