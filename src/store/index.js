import { createStore } from "vuex";

export default createStore({
  state: {
    User: {
      IsLoggedIn: false,
      Email: "",
      FullName: "",
      PhoneNumber: "",
    },
    LoginRegister: false,
  },
  mutations: {
    LogOut(state) {
      // console.log(state);
      state.User.IsLoggedIn = false;
      state.User.Email = "";
      state.User.FullName = "";
      state.User.PhoneNumber = "";
    },
    LogIn(state, Payload) {
      state.User.IsLoggedIn = true;
      state.User.Email = Payload.email;
      state.User.FullName = Payload.full_name;
      state.User.PhoneNumber = Payload.phone_number;
    },
    LoginRegisterToggle(state) {
      state.LoginRegister = !state.LoginRegister;
    },
  },
  getters: {
    IsLoggedIn: (state) => {
      return state.User.IsLoggedIn;
    },
    LoginRegister: (state) => {
      return state.LoginRegister;
    },
  },
  actions: {},
  modules: {},
});
