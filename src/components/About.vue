<template>
  <div
    class="py-4 p-st bg-light bg-dark2 text-light"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span class="title"> About </span
        >
      <hr
        width="50%"
        class="bg-secondary align-center"
      />
        <div class="text-center mx-auto mt-5 mb-5 col-md-8">
            <span v-html="about.description1"></span>
            <br><br>
            <span v-html="about.description2"></span>
            <br><br>
            <span v-html="about.description3"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "About",
  components: {
    //Timeline,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      about: {
        description1: 
        info.description1,
        description2: 
        info.description2,
        description3: 
        info.description3,
      },
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
</style>
