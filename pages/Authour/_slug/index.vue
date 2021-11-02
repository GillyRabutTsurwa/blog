<template>
  <div>
    <pre>{{articles}}</pre>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, params } = context;
    const articles = await $content("articles", params.slug)
      .where({
        "authour.name": {
          $regex: [params.author, "i"],
        },
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles: articles,
    };
  },
  created() {
    console.log(articles);
  },
};
</script>

<style>
</style>