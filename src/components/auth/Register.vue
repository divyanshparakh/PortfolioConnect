<template>
  <form @submit.prevent="RegisterSubmit()" class="register">
    <input name="name" type="text" v-model="FullName" placeholder="Full Name" />
    <input name="email" type="text" v-model="Email" placeholder="Email ID" />
    <input type="tel" v-model="PhoneNumber" placeholder="Phone Number" />
    <button v-if="PhoneNumber.length >= 10">Click for OTP</button>
    <input
      disabled
      name="one-time-code"
      type="text"
      autocomplete="new-password"
      v-model="OneTimeCode"
      placeholder="OTP"
    />
    <input type="password" v-model="Password" placeholder="Password" />
    <input
      type="password"
      v-model="PasswordConfirmation"
      placeholder="Confirm Password"
    />
    <button type="submit">SUBMIT &#8595;</button>
    <div v-if="Error" class="error">{{ Error }}</div>
    <br />
    <div class="text">Already Have An Account ?</div>
    <slot></slot>
  </form>
</template>
<script>
export default {
  data() {
    return {
      FullName: "",
      Email: "",
      PhoneNumber: "",
      OneTimeCode: "",
      Password: "",
      PasswordConfirmation: "",
      Error: false,
    };
  },
  methods: {
    RegisterSubmit() {
      this.axios
        .post(
          "/users/register",
          {
            fullName: this.FullName,
            email: this.Email,
            phoneNumber: this.PhoneNumber,
            oneTimeCode: this.OneTimeCode,
            password: this.Password,
            passwordConfirmation: this.PasswordConfirmation,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then(
          (res) => {
            // successful login
            // a non-200 response code
            this.Error = res.data.message;
            this.$store.commit("LoginRegisterToggle");
          },
          (err) => {
            // console.log(err.response.data.message);
            this.Error = err.response.data.message.replace(/"/g, "");
          }
        );
    },
  },
};
</script>
