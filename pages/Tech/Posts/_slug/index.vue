<template>
  <div>
    <Blog :article="article" :previous="prev" :next="next" />
  </div>
</template>

<script>
export default {
  name: "TechBlogSingle",
  async asyncData(context) {
    const { $content, params } = context;
    console.log(params);
    const article = await $content("articles/tech", params.slug).fetch();
    console.log(article);

    const prevAndNextArticles = $content("articles/tech").only(["title", "slug"]).sortBy("createdAt", "asc").surround(params.slug).fetch();
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

// TODO: make commit on refactoring the code on the single blog pages to the blog component

