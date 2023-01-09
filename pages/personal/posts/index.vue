<template>
  <div class="blogs-list-container">
    <h2>Blogs List</h2>
    <ul class="blogs__list">
      <li v-for="(currentPost, index) in postsList" :key="index" class="blogs__list--item">
        <NuxtLink :to="currentPost.slug">
          <img :src="currentPost.content.blogImage.filename" :alt="currentPost.content.blogImage.alt">
          <div class="blogs__list--item__info">
            <h2 class="blogs__list--item__title">{{truncateString(currentPost.name, 15)}}</h2>
            <h4 class="blogs__list--item__date-published">{{formatDate(currentPost.created_at || currentPost.published_at)}}</h4>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <!-- <pre>{{postsList}}</pre>
    <div v-for="(currentPost, index) in postsList" :key="index">
      {{ currentPost.name }}

    </div> -->
  </div>
</template>

<script setup>
/**
 * NOTE:
 * je vais deplacer ce code dans un composable
 * parce que je vais l'utiliser aussi chez pages/personal/posts/indes.vue
 * mais pour le moment, je vais me repeter juste pour faire marcher le code aussitôt que possible
 */
import { computed } from "vue";
const storyblokAPI = useStoryblokApi();

const { data } = await storyblokAPI.get("cdn/stories", {
  version: "draft",
  starts_with: "personal/posts/",
  // by_slugs: "tech/posts/*", //NOTE: maybe not
});

console.log(data);
const postsList = computed(() => {
  return data.stories.filter((currentStory) => currentStory.name !== "Home");
});

const truncateString = (text, limit) => {
  return text.length > limit ? text.substring(0, limit - 1) + "..." : text;
};

const formatDate = (currentDate) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(currentDate).toLocaleDateString("en-GB", options);
};
</script>

<style scoped>
.blogs-list-container {
  padding: 4rem 0;
}
/* BlogList.vue styles */
.blogs__list {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 25rem));
  /* TESTINGTEMPORARY */
  width: 80%;
  margin: auto;
}

.blogs__list--item {
  height: auto;
}
/* ========================= */
/* BlogCard.vue styles */

.blogs__list--item a:link,
.blogs__list--item a:visited {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2rem;

  -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075);

  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}

.blogs__list--item a:hover,
.blogs__list--item a:active {
  -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
}

.blogs__list--item img {
  height: 25rem;
  width: 100%;
  object-fit: cover;

  margin-right: 1.25rem;
}

.blogs__list--item__info {
  /* text-align: center; */
  /* or */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
}

.blogs__list--item__title {
  font-weight: bold;
  font-size: 2rem;
}

.blogs__list--item__date-published {
  font-style: italic;
  color: #888;
  font-weight: normal;
}

/* ========================= */
</style>