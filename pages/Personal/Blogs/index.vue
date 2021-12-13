<template>
  <div class="blogs-page-container">
    <h1 class="blogs-page-title">Blog Posts</h1>
    <ul class="blogs">
      <li v-for="currentArticle of articles" v-bind:key="currentArticle.slug" class="blogs__list">
        <NuxtLink v-bind:to="`/personal/blogs/${currentArticle.slug}`" class="blogs__list--link">
          <img v-bind:src="require(`~/assets/img/${currentArticle.img}`)" v-bind:alt="currentArticle.title" class="blogs__list--img">
          <div class="blogs__list--link-data">
            <h2 class="font-bold">{{currentArticle.title}}</h2>
            <p>by {{currentArticle.authour.name}}</p>
            <p class="font-bold text-gray-600 text-sm">{{currentArticle.description}}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
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

<style scoped>
.blogs-page-container {
  margin: 3rem;
  padding: 3rem;
}

.blogs-page-title {
  text-align: center;
}

.blogs {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.blogs__list {
}

.blogs__list--link,
.blogs__list--link:link,
.blogs__list--link:visited {
  display: flex;
  height: 12rem;

  /* -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075); */
  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}

.blogs__list--link:hover,
.blogs__list--link:active {
  -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
}

.blogs__list--img {
  height: 100%;
  width: auto;
  object-fit: cover;

  margin-right: 1.25rem;
}
</style>