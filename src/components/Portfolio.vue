<template>
  <div
    class="py-4 p-st bg-dark2 text-light"
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
          >Portfolio</span
        >
      </div>
      <hr
        width="50%"
        class="bg-secondary"
      />
      <div 
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000">
        <div class="row">
          <span class="text-light text-center col-md-8 mt-2 mb-3 mx-auto">This section is a work-in-progress, each project will be filled out in the following days with more detailed descriptions, images, and demos.</span>
        </div>
        <div class="card-deck">
          <div class="card mt-4 py-4 p-st bg-dark text-light" style="width:400px">
              <div class="card-body">
                <h4 class="card-title">E-commerce Website</h4>
                <img class="project-img mt-2 mb-3"  src="../assets/logo.png">
                <p class="card-text mt-4">An e-commerce business website example with functioning navbar and checkout systems.</p>
                <button type="button" class="btn mt-3 bg-dark2 mt-3 navbar-item text-light border border-dark" hidden>
                  View
                </button>
            </div>
          </div>
          <div class="card mt-4 py-4 p-st bg-dark text-light" style="width:400px">
              <div class="card-body">
                <h4 class="card-title">Unity Rail Movement</h4>
                <img class="project-img mt-2 mb-3" src="../assets/unity.png" >
                <p class="card-text mt-4">A starfox-esque game with a rail-movement system built by using Unity's Cinemachine.</p>
                <button type="button" class="btn mt-3 bg-dark2 mt-3 navbar-item text-light border border-dark" hidden>
                  View
                </button>
            </div>
          </div>
        </div>
        <div class="card-deck">
          <div class="card mt-4 py-4 p-st bg-dark text-light" style="width:400px">
              <div class="card-body">
                <h4 class="card-title">Vuejs CRUD webapp</h4>
                <img class="project-img mt-2 mb-3" src="../assets/logo.png">
                <p class="card-text mt-3">A simple web application that demonstrates CRUD operations in a simple vuejs webapp.</p>
                <button type="button" class="btn mt-3 bg-dark2 mt-3 navbar-item text-light border border-dark" hidden>
                  View
                </button>
            </div>
          </div>
          <div class="card mt-4 py-4 p-st bg-dark text-light" style="width:400px">
              <div class="card-body">
                <h4 class="card-title">Unity Camera Shaders</h4>
                <img class="project-img mt-2 mb-3" src="../assets/unity.png" >
                <p class="card-text mt-3">A unity scene that shows the effects of various shaders on the player's camera. 
                  A quick way to add visual flair to small games.</p>
                <button type="button" class="btn bg-dark2 mt-3 navbar-item text-light border border-dark" hidden>
                  View
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Portfolio",
  components: {
  },
  props: {
  },
  data() {
    return {
      all_info: info.portfolio,
      desgin_info: info.portfolio_design,
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 3,
      showBtn: "show more",
      shower: 0,
      project1: info.portfolio.project1,
      project2: info.portfolio.project2,
      project3: info.portfolio.project3,
      project4: info.portfolio.project4,
      data: [
      ],
    };
  },
  created() {
    for (var i = 0; i < this.number; i++) {
      this.portfolio_info.push(this.all_info[i]);
    }
  },
  watch: {
    number() {
      this.portfolio_info = [];
      for (var i = 0; i < this.number; i++) {
        this.portfolio_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
  },
};
</script>

<style scoped>
.project-img {
  width: 100px; 
  height: 100px;
}

.card-container {
  width: 300px;
  height: 300px;
}

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
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: #8585ad;
  color: #8585ad;
}

.btn:hover {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.btn:focus {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
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

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75
}
</style>
