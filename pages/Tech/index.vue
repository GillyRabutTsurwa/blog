<template>
  <div>
    <h2 class="introduction-title tech">Tech Blogs</h2>

    <p class="introduction-paragraph">
      This will be the home of my tech based blogs. Specifically, I will be talking about anything and everything web development. Even though the main subject of my posts, in particular, will be front-end development, I will also be writing about back-end development and my process on becoming adept with Linux. Predictably, I will be writing about what I am learning and using at the current time.
    </p>
    <p class="introduction-paragraph">
      I will also be writing about what other people are using and talking about, even if I have little knowledge and experience on the subject at the time. The world of web development is rapidly dynamic and keeping up is part of being a web developer. Whether it is on my professional tech blogs here, on my personal blogs on the other side. This is how I will be expressing myself online -- You can follow me on social media of course 😏.
    </p>
    <p class="introduction-paragraph">In any case, If you are still reading this, I want to thank you for reading to the end on hope you enjoy and/or learn a thing or two from my writings</p>

    <div class="introduction-links">
      <NuxtLink class="button--grey" to="/tech/posts">All Tech Blogs</NuxtLink>
      <NuxtLink class="button--grey" to="/personal">Personal Page</NuxtLink>
      <NuxtLink class="button--grey" to="/">Home</NuxtLink>
    </div>

    <hr>

    <div class="marquee">
      <DynamicMarquee direction="row" v-bind:repeat="false" v-bind:hoverPause="true">
        <ul class="marquee__inner">
          <li><i class="devicon-css3-plain"></i></li>
          <li><i class="devicon-javascript-plain"></i></li>
          <li><i class="devicon-gulp-plain"></i></li>
          <li><i class="devicon-webpack-plain"></i></li>
          <li><i class="devicon-vuejs-plain"></i></li>
          <li><i class="devicon-nuxtjs-plain"></i></li>
          <li><i class="devicon-svelte-plain"></i></li>
          <li><i class="devicon-typescript-plain"></i></li>
          <li><i class="devicon-react-plain"></i></li>
          <li><i class="devicon-nodejs-plain"></i></li>
          <li><i class="devicon-express-original"></i></li>
          <li><i class="devicon-mongodb-plain"></i></li>
          <li><i class="devicon-git-plain"></i></li>
          <li><i class="devicon-github-plain"></i></li>
          <li><i class="devicon-php-plain"></i></li>
          <li><i class="devicon-wordpress-plain"></i></li>
        </ul>
      </DynamicMarquee>
    </div>

    <hr>
    <Footer />

  </div>
</template>

<script>
import DynamicMarquee from "vue-dynamic-marquee";
export default {
  components: {
    DynamicMarquee: DynamicMarquee,
  },
  data() {
    return {
      // root: document.documentElement,
      marqueeContent: this.$refs.marqueeTest, // ca c'est marqueecontent dans l'exemple de codepen
    };
  },
};
</script>

<style scoped>
/* TESTING */
p {
  width: 50%;
  /* je override les declaration mise chez default.vue pour la taille de police */
  font-size: 2.125rem;
}

.marquee {
  width: 100%;
  height: 12rem;
  margin: 2rem 0;
}

.marquee__inner {
  position: relative;
  list-style-type: none;
  width: 100vw;
  display: flex;
  justify-content: space-between;
}

.marquee_inner li {
}

i[class^="devicon"] {
  font-size: 9.5rem;
  z-index: 1000;
  color: #1a2934;
}
</style>