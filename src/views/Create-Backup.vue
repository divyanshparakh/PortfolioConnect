<template>
  <div class="create">
    <form @submit.prevent="Create()" class="create-form">
      <div class="create-form-text">
        <input
          type="file"
          placeholder="Add your profile picture here"
          id="pp"
          style="display: none"
        />
        <label for="pp">Insert Your Profile Picture</label>
        <select
          name="honorific-prefix"
          id="honorific-prefix"
          v-model="Salutation"
        >
          <option selected disabled value="select-salutation">
            Select Salutation
          </option>
          <option
            v-for="(i, index) in HonorificPrefixList"
            :key="index"
            :value="i.value"
          >
            {{ i.text }}
          </option>
        </select>
        <input
          name="full-name"
          type="text"
          v-model="FullName"
          placeholder="Full Name"
          disabled
        />
        <input name="age" type="text" v-model="Age" placeholder="Age" />
        <input
          name="tel-personal"
          type="tel"
          v-model="PhoneNumber"
          placeholder="Phone Number"
          disabled
        />
        <input
          name="email"
          type="text"
          v-model="Email"
          placeholder="Email"
          disabled
        />
        <select name="qualification" id="qualification" v-model="Qualification">
          <option selected disabled value="select-qualification">
            Select Qualification
          </option>
          <option value="Engineering">Engineering</option>
          <option value="Bachelor In Computer Application">
            Bachelor In Computer Application
          </option>
          <option value="Bachelor In Commerce">Bachelor In Commerce</option>
          <option value="Bachelor In Business Administrative">
            Bachelor In Business Administrative
          </option>
        </select>
        </div>

        <skill-set class="skill-set" @SkillsUpdate="HandleUpdate"></skill-set>

        <select name="university" id="university" v-model="University">
          <option selected disabled value="select-university">
            Select University
          </option>
          <option
            v-for="(i, index) in UniversityList"
            :key="index"
            :value="i.value"
          >
            {{ i.text }}
          </option>
        </select>
        <input
          type="text"
          placeholder="Professional Title"
          v-model="ProfessionalTitle"
        />
        <textarea
          cols="30"
          rows="5"
          placeholder="Short and engaging pitch about yourself..."
          v-model="Pitch"
        ></textarea>
        <div>
          <h1>Experience</h1>
          <input type="text" placeholder="Organization" />
          <button type="menu">+</button>
          <input type="date" />
          <input type="date" disabled />
          <textarea cols="30" rows="2" placeholder="Points"></textarea>
          <button type="menu">+</button>
          <input type="url" placeholder="Organization's Logo URL" />
          <h1>Certificates</h1>
          <input
            type="file"
            size="30"
            name="Certificate"
            placeholder="Upload your Certificate"
          />
          <button type="menu">+</button>
        </div>
        <button type="submit">SUBMIT &#8595;</button>
      </div>
    </form>
    <div v-if="Error" class="error">{{ Error }}</div>
  </div>
</template>

<script>
import SkillSet from "../components/create/SkillSet";
export default {
  data() {
    return {
      UniversityList: [
        { text: "BIT Mesra", value: "BIT Mesra" },
        { text: "PES University", value: "PES University" },
      ],
      HonorificPrefixList: [
        { value: "Mr.", text: "Mr." },
        { value: "Ms.", text: "Ms." },
        { value: "Miss", text: "Miss" },
        { value: "Mrs.", text: "Mrs." },
        { value: "Dr.", text: "Dr." },
      ],
      Salutation: "select-salutation",
      FullName: "",
      Age: "",
      PhoneNumber: "",
      Email: "",
      Qualification: "select-qualification",
      University: "select-university",
      SkillSet: [],
      ProfessionalTitle: "",
      Pitch: "",
      Error: false,
    };
  },
  components: {
    SkillSet,
  },
  methods: {
    HandleUpdate(event) {
      const { value } = event.target;
      this.SkillSet.push(value);
    },
    Create() {
      this.axios
        .post(
          "/portfolios",
          {
            salutation: this.Salutation,
            fullName: this.FullName,
            age: this.Age,
            phoneNumber: this.PhoneNumber,
            email: this.Email,
            qualification: this.Qualification,
            university: this.University,
            skillSet: this.SkillSet,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
              Authorization: localStorage["jwt"],
            },
          }
        )
        .then(
          (res) => {
            // successful login
            // a non-200 response code
            this.Error = res.data.message;
          },
          (err) => {
            console.log(err.response.data.message);
            this.Error = err.response.data.message.replace(/"/g, "");
          }
        );
    },
    LoginCheck() {
      if (localStorage["jwt"] == undefined) this.$router.push("/");
    },
  },
  mounted() {
    this.LoginCheck();
    this.FullName = this.$store.state.User.FullName;
    this.PhoneNumber = this.$store.state.User.PhoneNumber;
    this.Email = this.$store.state.User.Email;
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1080px) {
  .create {
    height: 100%;
    width: 100%;
    padding: 100px 0px 35px 0px;
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
    &-form {
      margin: auto;
      max-width: 70vw;
      padding: 50px;
      border: 3px solid #e3507d;
      &-text {
        display: flex;
        flex-flow: column nowrap;
        min-height: 700px;
        input,
        select {
          width: 400px;
          height: 30px;
          margin: 10px;
          background-color: transparent;
          color: #e3507d;
          padding: 5px;
          font-weight: 600;
          border: none;
          border-bottom: 2px solid #e3507d;
          &:focus {
            box-shadow: 5px 7px 5px 4px rgba(0, 0, 0, 0.5);
          }
        }
        select {
          width: 409px;
          height: 45px;
          // appearance: none;
          option {
            background: rgba(227, 80, 125, 0.6) !important;
          }
        }
        textarea {
          width: 370px;
          margin: 50px;
          background-color: transparent;
          color: #e3507d;
          padding: 20px;
          font-weight: 600;
          border: none;
          border-bottom: 2px solid #e3507d;
          display: block;
          &:focus {
            box-shadow: 5px 7px 5px 4px rgba(0, 0, 0, 0.5);
          }
          &::placeholder {
            padding: 10px;
          }
        }
        button {
          &[type="submit"] {
            width: 260px;
            height: 40px;
            margin: 10px;
          }
          &[type="menu"] {
            border-radius: 100px;
            font-size: 32px;
            font-weight: 800;
            width: 50px;
            transform: scale(0.8);
          }
          background-color: #140156;
          border: 2px solid #e3507d;
          color: #e3507d;
          font-size: 17px;
          font-weight: 600;
          &:hover {
            background-color: #e3507d;
            color: whitesmoke;
          }
        }
      }
    }
  }
}
</style>
