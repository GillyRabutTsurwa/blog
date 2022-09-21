<template>
  <div>
    <pre>{{story}}</pre>
  </div>
</template>
  
<script setup>
const route = useRoute();
const story = await useStoryblok(`tech/posts/${route.params.slug}`, { version: "draft" });
</script>
  
  <style lang="scss" scoped>
</style>