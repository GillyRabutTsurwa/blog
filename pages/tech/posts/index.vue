<template>
  <div class="blogs-list-container">
    <!-- <div class="no-articles">
      <h4>Lists of Tech Posts Soon Come</h4>
      <img src="~/assets/img/computer-don-meme.png" alt="">
      <div class="introduction-links">
        <NuxtLink class="button--grey" to="/tech/">Go Back</NuxtLink>
        <NuxtLink class="button--grey" to="/personal">Personal Page</NuxtLink>
      </div>
    </div> -->
    <pre>{{postsList}}</pre>
    <div v-for="(currentPost, index) in postsList" :key="index">
      {{ currentPost.name }}
    </div>
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
  starts_with: "tech/posts/",
  // by_slugs: "tech/posts/*", //NOTE: maybe not
});

console.log(data);
const postsList = computed(() => {
  return data.stories.filter((currentStory) => currentStory.name !== "Home");
});
</script>


<style scoped>
.blogs-list-container {
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
  font-size: 2.25rem;
  text-transform: uppercase;
}
</style>