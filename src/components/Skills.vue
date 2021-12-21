<template>
  <div class="p-st bg-dark">
    <div class="container py-4 ">
      <div
        class="text-center mt-1"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center text-light "
          >Skills</span
        >
      </div>
      <hr
        width="50%"
        class="bg-secondary"
      />
      <br />
      <div class="row container">
        <div
          class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
        >
          <div class="bg-div"><i :class="skill.icon"></i></div>

          <div class="title2 pt-2">{{ skill.title }}</div>
          <hr
            width="50%"
            class="bg-secondary"
          />
          <div 
            v-for="element in skill.info"
            :key="element">
            <div class="title3 mb-2 text-center"> {{ element }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  color: #8585ad;
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: #8585ad;
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}
</style>
