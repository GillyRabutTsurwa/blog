<script setup>
const story = await useStoryblok("home", { version: "draft" });
console.log(story);
</script>


<template>
  <div>
    <NuxtWelcome />
    <pre>{{story}}</pre>

  </div>
</template>
