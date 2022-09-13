<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useStoryblok("personal", { version: "draft" });
console.log(story);
</script>

<style lang="scss" scoped>
</style>