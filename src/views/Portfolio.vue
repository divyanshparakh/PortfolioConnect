<template>
  <div class="portfolio">
    <div class="portfolio-form">
      <button @click="back()">&#8629;</button>
      <img :src="portfolio.image" alt="" />
      <div class="portfolio-form-data">
        <p class="Name">{{ portfolio.salutation }} {{ portfolio.full_name }}</p>
        <table>
          <tr>
            <td>{{ portfolio.age }}</td>
            <td>{{ portfolio.phone_number }}</td>
            <td>
              {{ portfolio.email }}
            </td>
          </tr>
          <tr>
            <td>{{ portfolio.qualification }}</td>
            <br />
            <td>{{ portfolio.university }}</td>
          </tr>
          <tr>
            <td v-for="i in portfolio.skills" :key="i">{{ i }}</td>
          </tr>
        </table>
        <p>{{ portfolio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PortfolioList: [],
    };
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
            this.PortfolioList = res.data;
          },
          (err) => {
            console.log(err.response.data.message);
            this.Error = err.response.data.message.replace(/"/g, "");
          }
        );
    },
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    portfolio() {
      for (let index = 0; index < this.PortfolioList.length; index++) {
        if (this.PortfolioList[index].id == this.$route.params.id)
          return this.PortfolioList[index];
      }
      return {};
    },
  },
  created() {
    this.getPortfolios();
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1080px) {
  .portfolio {
    height: 100%;
    width: 100%;
    padding: 100px 0px 35px 0px;
    display: flex;
    justify-items: center;
    align-items: center;
    align-self: center;
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
      padding: 30px;
      min-height: 74.2vh; // temp
      border: 3px solid #e3507d;
      button {
        width: 80px;
        margin: 10px;
        background-color: #140156;
        border: 2px solid #e3507d;
        color: #e3507d;
        font-size: 40px;
        font-weight: 600;
        float: left;
        &:hover {
          background-color: #e3507d;
          color: whitesmoke;
        }
        /*
              &[type="menu"] {
                border-radius: 100px;
                font-size: 32px;
                font-weight: 800;
                width: 50px;
                transform: scale(0.8);
              }
              */
      }
      img {
        height: 100;
        width: 100;
        border-radius: 1000px;
        float: right;
      }
      &-data {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        flex-flow: column wrap;
        * {
          margin: 10px;
        }
      }
    }
  }
}
</style>
