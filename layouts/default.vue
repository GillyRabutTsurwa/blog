<template>
  <div>
    <!-- je vais enlever la verficication isBlogReleased quand le blog est pret pour deployer officiellement -->
    <Navigation v-if="$nuxt.$route.path === '/' && isBlogReleased" />
    <Modal v-if="!isBlogReleased" />
    <Nuxt v-else-if="isBlogReleased" />
  </div>
</template>

<script>
import Modal from "~/components/Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      // changer cette valeur pour afficher et cacher le modal countdown
      // je vais mettre la valeur false en le developpement sur le web
      // et je vais changer la valeur à true en la deployant
      // dans le branche develop, cette valeur doit toujour etre false
      isBlogReleased: false,
    };
  },
  created() {
    console.log(this.$nuxt.$route.path);
  },
};
</script>

<style>
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-family: Alegreya Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  background-color: #efeceb;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.introduction-title {
  text-align: center;
  font-size: 4rem;
}

.introduction-title.tech {
  background-image: linear-gradient(to bottom right, #1a2934, #618299);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.introduction-paragraph {
  margin: 0 0 1.5rem 3rem;
  padding-left: 2rem;
  border-left: 0.25rem solid transparent;
  transition: border-left 0.5s ease-in;
}

.introduction-paragraph:not(:nth-of-type(2)):hover {
  border-left: 0.25rem solid #1a2934;
}

.introduction-links {
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.introduction-links a {
  margin: 0 1.5rem;
}
</style>
