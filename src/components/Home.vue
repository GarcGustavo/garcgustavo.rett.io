<template>
  <div
    class="pt-5 p-st"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center container-bg mr-5">
        <div class="col-xl-5 col-bg-5 col-md-5 col-sm-6 text-center mt-4 mb-4">
          <img class="rounded-circle ml-5 mt-auto mb-auto" :src="picture" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-6 mx-auto pt-2">
          <span class="home-title font-weight-bold"> Gustavo A. Reyes Carrion</span>
          <p class="home-title-sub mb-0"> Software Engineer</p>
          <p class="home-title-sub2 mt-0 mb-3"> B.S. in Computer Engineering</p>

          <div class="row mx-auto pt-3 mb-0">
            <p class="mb-0 mr-3"> Contact: </p>
            <p v-html="email"></p>
          </div>
          <div class="pb-4">
            <row style="display: flex;">
              <div class="col-md-3 text-left">
                <p class="home-title-sub2 mt-3 ml-0 mb-1">LinkedIn</p>
                <button
                  class="btn btn-outline-secondary ml-2"
                  @click="open('linkedin')"
                  v-tooltip.bottom="'LinkedIn'"
                >
                  <i class="fab fa-linkedin"></i>
                </button>
              </div>
              <div class="col-md-3 text-center">
                <p class="home-title-sub2 mt-3 ml-1 mb-1">Github</p>
                <button
                  class="btn btn-outline-secondary"
                  @click="open('github')"
                  v-tooltip.bottom="'GitHub'"
                >
                  <i class="fab fa-github"></i>
                </button>
              </div>
              <div class="col-md-3 text-right">
                <p class="home-title-sub2 mt-3 ml-2 mb-1">Devlog</p>
                <button
                  class="btn btn-outline-secondary"
                  @click="open('devlog')"
                  v-tooltip.bottom="'Devlog'"
                >
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Home",
  components: {
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      email: info.email,
      linkedin: info.links.linkedin,
      github: info.links.github,
      devlog: info.links.devlog
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "devlog":
          window.open(this.devlog, "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
.container-bg {
  background-color:#262c30;
  border-color:dimgray;
  border-style: solid;
  margin-inline: 100px;
}

.home-title {
  font-size: 32px;
  font-weight: 500;
}
.home-title-sub {
  font-size: 24px;
  font-weight: 500;
}
.home-title-sub2 {
  font-size: 14px;
  font-weight: 500;
}

img {
  max-width: 800px;
  max-height: 500px;
  margin-top: 80px;
  transform: rotateY(180deg);
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

</style>
