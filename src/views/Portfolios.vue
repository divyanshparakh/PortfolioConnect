<template>
  <div class="portfolios">
    <h1>PORTFOLIOS</h1>
    <div class="portfolios-form">
      <input
        type="text"
        class="portfolios-form-search"
        v-model="searchQuery"
        placeholder="Search Here"
      />
      <table class="portfolios-form-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Salutation</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>E-Mail</th>
            <th>Qualification</th>
            <th>University</th>
            <th>Number of Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr
            @click="$router.push('/portfolio/' + Portfolio['id'])"
            v-for="(Portfolio, index) in resultQuery"
            :key="index"
          >
            <td>{{ Portfolio["id"] }}</td>
            <td>{{ Portfolio["salutation"] }}</td>
            <td>{{ Portfolio["full_name"] }}</td>
            <td>{{ Portfolio["age"] }}</td>
            <td>{{ Portfolio["phone_number"] }}</td>
            <td>{{ Portfolio["email"] }}</td>
            <td>{{ Portfolio["qualification"] }}</td>
            <td>{{ Portfolio["university"] }}</td>
            <td>{{ Portfolio["skills"].length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="Error" class="error">{{ Error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PortfolioList: [],
      searchQuery: "",
      Error: null,
    };
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.PortfolioList.filter((Portfolio) => {
          return (
            Portfolio.salutation.startsWith(this.searchQuery) ||
            Portfolio.full_name.startsWith(this.searchQuery) ||
            Portfolio.age.startsWith(this.searchQuery) ||
            Portfolio.phone_number.startsWith(this.searchQuery) ||
            Portfolio.email.startsWith(this.searchQuery) ||
            Portfolio.qualification.startsWith(this.searchQuery) ||
            Portfolio.university.startsWith(this.searchQuery) ||
            Portfolio.skills.includes(this.searchQuery)
          );
        });
      } else {
        return this.PortfolioList;
      }
    },
  },
  methods: {
    getPortfolios() {
      this.axios
        .get("/portfolios", {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
            Authorization: localStorage["jwt"],
          },
        })
        .then(
          (res) => {
            // successful login
            // a non-200 response code
            this.PortfolioList = res.data;
          },
          (err) => {
            console.log(err.response.data.message);
            this.Error = err.response.data.message.replace(/"/g, "");
          }
        );
    },
    loginCheck() {
      if (localStorage["jwt"] == undefined) this.$router.push("/");
    },
  },
  mounted() {
    // this.RetrieveUniversityList();
    this.loginCheck();
    this.getPortfolios();
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1080px) {
  .portfolios {
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
      max-width: 70vw;
      padding: 50px;
      min-height: 79.3vh; // temp
      &-search {
        width: 200px;
        height: 10px;
        position: relative;
        float: right;
        background: #e3507d;
        border: none;
        color: whitesmoke;
        padding: 15px;
        outline-style: none;
        text-align: center;
        &:focus {
          box-shadow: 5px 7px 5px 4px rgba(0, 0, 0, 0.5);
        }
      }
      &-table {
        width: 100%;
        // border-collapse: collapse;
        background: transparent;
        overflow: none;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 80px;
        font-family: Helvetica;
        font-weight: 600;
        text-align: center;
        border: none;
        color: #e3507d;
        border: 2px solid #e3507d;
        th {
          background: #411fbb;
          height: 50px;
          border: none;
        }
        tbody {
          tr {
            cursor: pointer;
            height: 40px;
            td {
              border: none;
              padding: 15px;
            }
            &:nth-child(odd) {
              background: rgb(9, 11, 15);
            }
          }
        }
      }
    }
  }
}
</style>
