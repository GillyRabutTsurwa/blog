<template>
  <div class="container">
    <div class="personal">
      <div class="personal__img">
        <img v-bind:src="require(`~/assets/img/gilbert-personal.jpg`)" alt="">
      </div>
      <NuxtLink to="/personal" class="personal__link">
        <span class="personal__link--text">Personal</span>
      </NuxtLink>
    </div>
    <div class="tech">
      <div class="tech__img">
        <img v-bind:src="require(`~/assets/img/gilbert-professional.jpg`)" alt="">
      </div>
      <NuxtLink to="/tech" class="tech__link">
        <span class="tech__link--text">Tech</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  /* @apply min-h-screen flex justify-center items-center text-center; */
  /* NOTE: don't even need it */
}

.container {
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); ne marche pas bien prkwa?*/
  grid-template-columns: repeat(2, calc(100vw / 2));
  grid-auto-rows: 1fr;
}

.container > * {
  width: 100%;
  /* height: 100%; ne marche pas */

  /* inherits 100vh from the parent */
  height: inherit;
  position: relative;
}

/* same as .personal a & .tech a */
.personal__link,
.tech__link {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.personal {
  border-right: 0.5rem black solid;
  grid-column: 1 / 2;
}

.tech {
  border-left: 0.5rem black solid;
  grid-column: 2 / 3;
}

.personal:hover .personal__img,
.tech:hover .tech__img {
  filter: blur(0);
}

.personal:hover .personal__link,
.tech:hover .tech__link {
  opacity: 1;
}

/* .personal:hover,
.tech:hover {
  filter: blur(0);
} */

.personal__img,
.tech__img {
  width: 100%;
  height: 100%;

  -webkit-filter: blur(10px);
  filter: blur(10px);

  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.personal__img img,
.tech__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.personal__link--text,
.tech__link--text {
  position: absolute;
  bottom: 0rem;
  width: 100%;
  text-align: center;

  font-size: 4rem;
  font-weight: bold;
  padding: 3rem 1.5rem;
  background-color: rgba(31, 19, 21, 0.6);
  color: rgb(197, 197, 199);
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
