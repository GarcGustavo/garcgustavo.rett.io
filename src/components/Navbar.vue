<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-dark2 fixed-top p-st navbar-blur"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="/"
          @click.prevent="$emit('scroll', 'home')"
        >
          <Logo/>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-2">
              <a
                class="nav-link text-light"
                href="/about"
                @click.prevent="$emit('scroll', 'about')"
                >About</a
              >
            </li>
            <li class="nav-item mx-2">
              <a
                class="nav-link text-light"
                href="/skills"
                @click.prevent="$emit('scroll', 'skills')"
                >Skills</a
              >
            </li>
            <li class="nav-item mx-2 ">
              <a
                class="nav-link text-light"
                href="/portfolio"
                @click.prevent="$emit('scroll', 'portfolio')"
                >Portfolio</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from "./helpers/Logo";
import info from "../../info";

export default {
  name: "Navbar",
  data() {
    return {
      navbarConfig: info.config.navbar
    };
  },
  components: {
    Logo,
  }
};
</script>

<style scoped>
.nav-link {
  font-weight: 500;
}
.nav-link:hover{
  background-color: rgba(160, 159, 159, 0.336);
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  background-color: #ffffff7e;
  backdrop-filter: blur(12px);
}
</style>
