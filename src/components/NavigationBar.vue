<template>
  <div
    class="navigation-bar"
    :class="{ navigation_bar_top: scrollPosition > 800 }"
  >
    <a href="/">
      <img src="../assets/brand/BrandLogo.png" v-if="IsLoggedIn" class="logo" />
    </a>
    <div class="menu-list">
      <router-link to="/" class="menu-list-items">Home</router-link>
      <router-link to="/create" class="menu-list-items"
        >Create Portfolio</router-link
      >
      <router-link to="/portfolios" class="menu-list-items"
        >Portfolios</router-link
      >
      <router-link to="/about" class="menu-list-items">About</router-link>
      <router-link to="/contact" class="menu-list-items">Contact</router-link>
      <div class="menu-list-profile">
        Welcome: {{ this.$store.state.User.FullName }}
      </div>
      <button class="login-logout" @click="LogOut()">
        <p v-if="IsLoggedIn == false">LOGIN</p>
        <p v-else>LOGOUT</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function () {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    LogOut() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("expiry");
      this.$store.commit("LogOut");
      this.$router.push("/");
    },
  },
  updated() {
    window.addEventListener("scroll", this.updateScroll);
    if (localStorage["expiry"] < Date.now() / 1000) {
      this.LogOut();
    }
  },
  computed: {
    ...mapGetters(["IsLoggedIn"]),
  },
};
</script>

<style lang="scss">
.navigation-bar {
  display: none;
}

@media screen and (min-width: 1080px) {
  .navigation-bar {
    display: flex;
    max-height: 60px;
    width: 100%;
    position: fixed;
    background-color: transparent;
    justify-content: space-between;
    z-index: 10;
    .logo {
      margin-left: 10px;
      opacity: 0;
    }
    .menu-list {
      width: 80vw;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      &-items {
        text-align: center;
        font-size: 17px;
        padding: 20px;
        max-height: 50px;
        font-weight: 800;
        text-decoration: none;
        font-family: "Courier New", "Georgia", Geneva, Verdana, sans-serif;
        color: #2de3ff;
        min-width: 110px;
        transition-duration: 1s;
        &.router-link-exact-active {
          color: whitesmoke;
          text-decoration: underline;
        }
        &:hover {
          background-color: #e3507d;
          color: whitesmoke;
        }
        &:active {
          transition-duration: 1s;
          transform: scale(0.95);
        }
      }
      &-profile {
        color: whitesmoke;
        background: #181b1b;
        height: 100%;
        width: 100px;
        border-radius: 50%;
        position: relative;
      }
      .login-logout {
        cursor: pointer;
        width: 130px;
        height: 60px;
        background-color: #140156;
        border: 3px solid #e3507d;
        font-weight: 600;
        padding: 15px;
        font-size: 17px;
        transition-duration: 1s;
        p {
          color: #e3507d;
        }
        &:active {
          transition-duration: 1s;
          transform: scale(0.95);
        }
        &:hover {
          background-color: #e3507d;
          background-image: linear-gradient(
            to right,
            #e29867,
            #ec8469,
            #f26e75,
            #f05a89,
            #e34da4,
            #d842b3,
            #c73cc3,
            #ae3dd5,
            #a330dd,
            #9422e6,
            #8114ef,
            #6607f9
          );
          p {
            color: whitesmoke;
          }
        }
      }
    }
  }
  .navigation_bar_top {
    background-color: #e3507d;
    .menu-list-items {
      color: black;
    }
    .logo {
      opacity: 1;
    }
  }
}
</style>

//
<a
  href="/home"
  class="router-link-active router-link-exact-active menu-item"
  aria-current="page"
>Home</a>

// #E29867 #B94FCC #6607F9 // #E3507D #AC34F3 #570BE7
