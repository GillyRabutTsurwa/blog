<template>
  <article>
    <nuxt-content v-bind:document="article" />
    <pre>{{article}}</pre>
    <p>Post last updated: {{formatDate(article.updatedAt)}}</p>
  </article>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, params } = context;
    const article = await $content("articles", params.slug).fetch();

    return {
      article: article,
    };
  },
  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>