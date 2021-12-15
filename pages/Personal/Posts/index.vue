<template>
  <div class="blogs-page-container">
    <BlogsTitle genre="Personal" />
    <BlogsListTest :articles="articles" />
  </div>
</template>

<script>
export default {
  name: "PersonalBlogsPage",
  async asyncData(context) {
    const { $content } = context;
    const articles = await $content("articles/personal").only(["title", "description", "img", "slug", "authour"]).sortBy("createdAt", "asc").fetch();
    console.log(articles);

    return {
      articles: articles,
    };
  },
};
</script>

<style>
.blogs-page-container {
  position: relative;
  margin: 3rem;
  padding: 3rem;
}
</style>