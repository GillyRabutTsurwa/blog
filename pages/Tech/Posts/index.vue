<template>
  <div class="blogs-page-container">
    <BlogsTitle genre="Tech" />
    <!-- TESTINGTEMPORARY jusqu'a ce que j'ecrive des postes du tech -->
    <div v-if="articles.length === 1" class="no-articles">
      <h4>No Tech Posts Yet. Coming Very Soon</h4>
      <img v-bind:src="require('@/assets/img/computer-don-meme.png')" alt="">
      <div class="introduction-links">
        <NuxtLink class="button--grey" to="/tech/">Go Back</NuxtLink>
        <NuxtLink class="button--grey" to="/personal">Personal Page</NuxtLink>
      </div>
    </div>
    <!--  -->
    <BlogsListTest v-else :articles="articles" />
  </div>
</template>

<script>
export default {
  name: "TechBlogsPage",
  async asyncData(context) {
    const { $content } = context;
    const articles = await $content("articles/tech").only(["title", "description", "img", "slug", "authour"]).sortBy("createdAt", "asc").fetch();
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

/*  */
.no-articles {
  position: absolute;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.no-articles h4 {
  margin: 4rem;
  font-size: 2.5rem;
  text-transform: uppercase;
}
</style>