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
        <div class="text-center mx-auto mt-4 mb-5 col-md-6">
            <span v-html="about.data"
            ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Resume",
  components: {
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
        data: info.resume,
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
