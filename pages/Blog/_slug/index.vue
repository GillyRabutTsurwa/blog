<template>
  <article>
    <nuxt-content v-bind:document="article" />
    <pre>{{article}}</pre>
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
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>