<template>
  <div>
    <article class="blog-container">
      <div class="blog-img-container">
        <img v-bind:src="require(`~/assets/img/${article.img}`)" alt="article.alt">
      </div>

      <div class="blog-content">
        <NuxtLink to="/tech/posts" class="link-back">
          <i class="fa fa-hand-o-left" aria-hidden="true"></i>
        </NuxtLink>

        <h2 class="blog-content__title">{{article.title}}</h2>
        <p class="blog-content__description">{{article.description}}</p>
        <p class="blog-content__date">Post Created: {{formatDate(article.createdAt)}} (Updated on {{formatDate(article.updatedAt)}})</p>

        <nav class="blog-content__navigation">
          <h4 @click="toggleToc" class="blog-content__navigation--title">{{isTocToggled ? "Table of Contents" : "Click to Show Table of Contents"}}</h4>
          <ul v-if="isTocToggled" class="blog-content__navigation--toc">
            <li v-for="currentArticleLink of article.toc" v-bind:key="currentArticleLink.id">
              <NuxtLink v-bind:to="`#${currentArticleLink.id}`">{{currentArticleLink.text}}</NuxtLink>
            </li>
          </ul>
        </nav>

        <NuxtContent v-bind:document="article" />
        <PrevNext v-bind:prev="previous" v-bind:next="next" class="prev-n-next"></PrevNext>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    article: {
      type: Object,
      required: true,
    },
    previous: {
      type: Object,
      required: false,
    },
    next: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      isTocToggled: false,
    };
  },
  methods: {
    formatDate(currentDate) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return new Date(currentDate).toLocaleDateString("en-GB", options);
    },
    toggleToc() {
      this.isTocToggled = !this.isTocToggled;
    },
  },
};
</script>

<style>
@import "~/assets/css/main.css";

.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  min-height: 100vh;
}

.blog-img-container,
.blog-content {
  height: 100%;
}

.blog-img-container {
  position: sticky;
  top: 0;
  height: 100vh;
}

.blog-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  position: relative;
}

.blog-content__title {
  font-weight: bolder;
  font-size: 5rem;
}

.blog-content__description {
  font-size: 2.25rem;
}

.blog-content__date {
  font-weight: bold;
  font-style: italic;
}

.blog-content__navigation {
  width: 50rem;
  margin: 0 auto;
}

.blog-content__navigation--title {
  text-align: center;
  font-weight: bold;
}

.blog-content__navigation--toc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-content__navigation--toc li {
  margin: 0.55rem;
}

/*  */

.nuxt-content-container {
  padding: 3rem;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4 {
  font-weight: bold;
}

.nuxt-content h2 {
  font-size: 2.8rem;
}

.nuxt-content h3 {
  font-size: 2.2rem;
}

.nuxt-content p {
  margin-bottom: 2rem;
}

.prev-n-next {
  margin: 1.5rem 2rem;
}

/* TESTING */

.note {
  text-transform: uppercase;
}

.nuxt-content-highlight {
  position: relative;
}

.nuxt-content-hightlight .filename {
  position: absolute;
  right: 0;
  color: pink;
  background-color: teal;
}

/* TESTING */
.link-back {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
</style>

<style>
@import "~/assets/css/main.css";

.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  min-height: 100vh;
}

.blog-img-container,
.blog-content {
  height: 100%;
}

.blog-img-container {
  position: sticky;
  top: 0;
  height: 100vh;
}

.blog-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  position: relative;
}

.blog-content__title {
  font-weight: bolder;
  font-size: 5rem;
}

.blog-content__description {
  font-size: 2.25rem;
}

.blog-content__date {
  font-weight: bold;
  font-style: italic;
}

.blog-content__navigation {
  width: 50rem;
  margin: 0 auto;
}

.blog-content__navigation--title {
  text-align: center;
  font-weight: bold;
}

.blog-content__navigation--toc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-content__navigation--toc li {
  margin: 0.55rem;
}

/*  */

.nuxt-content-container {
  padding: 3rem;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4 {
  font-weight: bold;
}

.nuxt-content h2 {
  font-size: 2.8rem;
}

.nuxt-content h3 {
  font-size: 2.2rem;
}

.nuxt-content p {
  margin-bottom: 2rem;
}

.prev-n-next {
  margin: 1.5rem 2rem;
}

/* TESTING */

.note {
  text-transform: uppercase;
}

.nuxt-content-highlight {
  position: relative;
}

.nuxt-content-hightlight .filename {
  position: absolute;
  right: 0;
  color: pink;
  background-color: teal;
}

/* TESTING */
.link-back {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
</style>