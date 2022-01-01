<template>
  <div>
    <h2 class="introduction-title personal">Personal Blogs</h2>
    <!-- <Navigation class="right-aligned" /> -->

    <div class="introduction-content">
      <div class="introduction-content__left">
        <p class="introduction-paragraph">
          Welcome to my personal blogs page. On this side, you will get to know me more personally (obviously). There will be nothing about web development here. Instead, it will be about the interesting things that I am doing in my life, my opinions and reviews on various random subjects that are not heavy nor intense, among many other things. Although this is going to be a personal blog, my intent is to make this lighthearted.</p>
        <p class="introduction-paragraph">
          However, the posts on here will not be brainless, nor shallow. They will have substance on them, in the hope that this might help whoever is taking the time to read them. That being said, these posts are primarily for me, and I intend on having them strongly ressemble journal entries. In this page, I will be expressing myself more than I do on my social media platforms, so in case one would like to get to know me as a person, keep up with my blogs.
        </p>
        <p class="introduction-paragraph">Anyways, enough waffling. Take a look at my blogs. Or, if you want to cross over to my tech blogs, consult the links below.</p>

      </div>
      <div class="introduction-content__right">
        <!-- <VueCardStack :cards="cards" :stack-width="360" :card-width="280"> -->
        <VueCardStack :cards="cards" :stack-width="420" :card-width="320">
          <template v-slot:card="{ card }">
            <div class="card" style="width: 100%; height: 100%; padding-top: 1rem;">
              <figure class="card-img">
                <img :src="card.imgSrc">
                <figcaption>{{card.text}}</figcaption>
              </figure>
            </div>
          </template>
          <!-- cards navigation -->
          <template v-slot:nav="{ activeCardIndex, onNext, onPrevious }">
            <nav class="nav">
              <div class="counter">{{activeCardIndex + 1}}/{{cards.length}}</div>
              <button v-on:click="onPrevious" class="button button__left">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
              <button v-on:click="onNext" class="button button__right">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>

              </button>
            </nav>
          </template>
        </VueCardStack>

      </div>
    </div>

    <div class="introduction-links">
      <NuxtLink class="button--grey" to="/personal/posts">All Personal Blogs</NuxtLink>
      <NuxtLink class="button--grey" to="/tech">Tech Page</NuxtLink>
      <NuxtLink class="button--grey" to="/">Home</NuxtLink>
    </div>
    <Footer />
  </div>
</template>

<script>
import VueCardStack from "vue-card-stack";
export default {
  components: {
    VueCardStack: VueCardStack,
  },
  data() {
    return {
      cards: [
        { imgSrc: require("@/assets/img/card-pic-1.jpeg"), text: "Yo wagwhan" },
        { imgSrc: require("@/assets/img/card-pic-2.jpeg"), text: "Yo wagwhan" },
        { imgSrc: require("@/assets/img/card-pic-3.jpeg"), text: "Yo wagwhan" },
        { imgSrc: require("@/assets/img/card-pic-4.jpeg"), text: "Yo wagwhan" },
        { imgSrc: require("@/assets/img/card-pic-5.jpeg"), text: "Yo wagwhan" },
      ],
    };
  },
};
</script>

<style scoped>
/* TESTING */
.introduction-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.introduction-content__right {
  justify-self: center;
}

.card {
  background-color: rgb(238, 238, 238);
  -webkit-box-shadow: 0px 5px 14px -3px #000000;
  box-shadow: 0px 5px 14px -3px #000000;
}

.card-img {
  width: 90%;
  height: 70%;
  border: 2px solid black;
  margin: 0 auto;
  background-color: rgb(238, 238, 238);
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.button {
  position: relative;
  bottom: 30rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ccc;
  color: #2d2d2d;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.button__left {
  right: 4rem;
}

.button__right {
  left: 37.5rem;
}

/* for nav */
.right-aligned {
  position: relative;
  right: 50rem;
}
</style>