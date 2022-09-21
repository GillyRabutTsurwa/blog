<template>
  <div>
    <StoryblokComponent v-if="story" :blok="{...story.content, ...metaData}" />
  </div>
</template>

<script setup>
const route = useRoute();
const story = await useStoryblok(`personal/posts/${route.params.slug}`, { version: "draft" });
console.log(story);

/**
 * NOTEIMPORTANT: @ line 3, instead of using the story.content object, I am passing, to my storyblok components, some more data I'd like to use.
 * to do this, I created a new object with the approriate information destructured in a new object, which also has the original information destructured
 */
const { created_at, first_published_at, slug, full_slug } = story.value;
const metaData = {
  dateCreated: created_at,
  datePublished: first_published_at,
  name: slug,
  fullURLPath: full_slug,
};
</script>

<style lang="scss" scoped>
</style>