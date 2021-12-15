<template>
  <!-- <NuxtLink v-bind:to="`/tech/posts/${article.slug}`"> -->
  <NuxtLink v-bind:to="`/${postCategory}/posts/${article.slug}`">
    <img v-bind:src="require(`~/assets/img/${article.img}`)" v-bind:alt="article.title">
    <div class="blogs__list--item__authour">
      <h2 class="blogs__list--item__authour--title">{{truncateString(article.title, 15)}}</h2>
      <p class="blogs__list--item__authour--name">by {{article.authour.name}}</p>
      <p class="blogs__list--item__authour--description">{{truncateString(article.description, 20)}}</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    postCategory() {
      return this.article.path.includes("tech") ? "tech" : "personal";
    },
  },
  methods: {
    truncateString(text, limit) {
      return text.length > limit ? text.substring(0, limit - 1) + "..." : text;
    },
  },
  created() {
    console.log(this.article);
  },
};
</script>

<style>
.blogs__list--item a {
  display: flex;
  width: 100%;
  height: 100%;
}

.blogs__list--item a:link,
.blogs__list--item a:visited {
  /* -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075); */
  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}

.blogs__list--item a:hover,
.blogs__list--item a:active {
  -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
}

.blogs__list--item img {
  height: 100%;
  width: 20rem;
  object-fit: cover;

  margin-right: 1.25rem;
}

.blogs__list--item__authour {
  /* text-align: center; */
  /* or */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.blogs__list--item__authour--title {
  font-weight: bold;
  font-size: 2rem;
}

.blogs__list--item__authour--name {
  font-style: italic;
}

.blogs__list--item__authour--description {
  text-align: center;
}
</style>