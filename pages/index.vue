<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useStoryblok("home", { version: "draft" });
// const stories = await useStoryblokApi("cdn/stories"); TESTING

console.log(story);
</script>

<style lang="scss" scoped>
</style>