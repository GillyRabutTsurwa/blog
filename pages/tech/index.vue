<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useStoryblok("tech", { version: "draft" });
console.log(story);
</script>

<style lang="scss" scoped>
</style>