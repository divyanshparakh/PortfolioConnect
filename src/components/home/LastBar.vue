<template>
  <div class="last-bar">
    <h1 class="last-bar-title">Multi Platform</h1>
    <div class="last-bar-images">
      <img
        src="https://img.freepik.com/free-vector/student-girl-wearing-graduation-cap_179970-713.jpg?size=626&ext=jpg"
        alt=""
      />
      <img
        src="https://img.freepik.com/free-vector/businessman-laptop-leader-runs-up-books-with-trophy-his-team-business-leadership-managing-skills-leadership-training-plan-concept-pinkish-coral-bluevector-isolated-illustration_335657-1647.jpg?size=626&ext=jpg"
        alt=""
      />
      <img
        src="https://img.freepik.com/free-vector/people-holding-creative-ideas-icons_53876-59890.jpg?size=626&ext=jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.last-bar {
  height: 450px;
  background-color: #0c045c;
  position: relative;
  &-images {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    img {
      position: relative;
      top: 80px;
      height: 300px;
      width: 400px;
    }
  }
  &-title {
    margin: auto;
  }
}
</style>
