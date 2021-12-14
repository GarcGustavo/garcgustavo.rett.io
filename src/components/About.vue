<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': nightMode,
      'bg-dark2': !nightMode,
      'text-light': !nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: nightMode, 'text-light': !nightMode }"
          >About</span
        >
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': !nightMode }"
      />
        <div class="text-center">
            <span v-html="education.data"
            :class="{ pgray: nightMode, 'text-light': !nightMode }" 
            ></span>
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
      education: {
        data: info.description,
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
