<template>
  <div>
    <Blog :article="article" :previous="prev" :next="next" />
  </div>
</template>

<script>
export default {
  name: "PersonalBlogSingle",
  async asyncData(context) {
    const { $content, params } = context;
    console.log(params);
    const article = await $content("articles/personal", params.slug).fetch();
    console.log(article);

    const prevAndNextArticles = $content("articles/personal").only(["title", "slug"]).sortBy("createdAt", "asc").surround(params.slug).fetch();
    console.log(prevAndNextArticles);

    const [prev, next] = await prevAndNextArticles;

    return {
      article: article,
      prev: prev,
      next: next,
    };
  },
};
</script>