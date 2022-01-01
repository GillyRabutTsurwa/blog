<template>
  <div>
    <ul class="blogs__list">
      <li v-for="currentArticle of articles" v-bind:key="currentArticle.slug" class="blogs__list--item">
        <BlogCard :article="currentArticle" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.articles);
  },
};
</script>

<style>
.blogs__list {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 40rem));
  /* TESTINGTEMPORARY */
  width: 80%;
  margin: auto;
}

.blogs__list--item {
  height: 15rem;
}
</style>