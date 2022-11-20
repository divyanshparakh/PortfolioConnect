<template>
  <form @submit.prevent="LoginSubmit()" class="login">
    <input
      type="email"
      id="username"
      name="username"
      autocomplete="username"
      v-model="Email"
      placeholder="Email ID"
    />
    <input
      type="password"
      id="password"
      v-model="Password"
      autocomplete="current-password"
      placeholder="Password"
    />
    <button type="submit">LOGIN</button>
    <div class="text"><a href="">Forgot Password?</a></div>
    <div class="text">Not a Member?</div>
    <div v-if="Error" class="error">{{ Error }}</div>
    <br />
    <slot></slot>
  </form>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  data() {
    return {
      Email: "",
      Password: "",
      Error: false,
    };
  },
  computed: {
    IsLoggedIn() {
      return this.$store.state.IsLoggedIn;
    },
  },
  methods: {
    LoginSubmit() {
      this.axios
        .post(
          "/users/login",
          {
            email: this.Email,
            password: this.Password,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
              Accept: "application/vnd.api+json",
            },
          }
        )
        .then(
          (res) => {
            // successful login
            // a non-200 response code
            let JWT = res.headers["authorization"].slice(6);
            let decoded = VueJwtDecode.decode(JWT);
            localStorage.jwt = res.headers["authorization"].slice(6);
            localStorage.expiry = decoded["exp"];
            this.Error = "";

            //decode token here and attach to the user object
            // console.log(decoded["exp"]);
            this.$store.commit("LogIn", decoded);
            // return error in production env
          },
          (err) => {
            if (err.response) {
              console.log(err.response.data.message);
              this.Error = err.response.data.message.replace(/"/g, "");
            } else {
              this.Error = "Not able to connect to the Server.";
            }
          }
        );
    },
  },
  created() {
    //decode token here and attach to the user object
    if (localStorage["jwt"] != null) {
      let decoded = VueJwtDecode.decode(localStorage.jwt);
      this.$store.commit("LogIn", decoded);
    }
  },
};
</script>
