<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  <!-- <h4>test</h4>
  <pre>{{story.content}}</pre> -->
</template>

<script setup>
const story = await useStoryblok("home", { version: "draft" });
console.log(story);
</script>

<style lang="scss" scoped>
</style>