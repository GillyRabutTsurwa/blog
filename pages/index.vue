<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useStoryblok("home", { version: "published" });
// const stories = await useStoryblokApi("cdn/stories"); TESTING

console.dir(story);
console.dir(story.content);
</script>

<style lang="scss" scoped>
</style>