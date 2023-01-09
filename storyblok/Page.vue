<template>
  <div v-editable="blok">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
/**
 * NOTEIMPORTANT:
 * this is the only file that i did not really modify
 * meaning, i simply did a copy and paste from the Storyblok documentation
 * i will put a link here once I retrieve it.
 * from now on, I will deem this as a very important default component that should never be removed
 */
const props = defineProps({
  blok: {
    type: Object,
    default: () => ({}),
  },
});
console.log(props);
console.log(props.blok);
</script>

<style lang="scss" scoped>
</style>