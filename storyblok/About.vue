<template>
  <div>
    <div v-editable="blok" class="about">
      <!-- <StoryblokComponent v-for="blok in blok.columns" :key="blok._uid" :blok="blok" /> -->
      <h3>{{blok.titre}}</h3>
      <p>{{blok.paragraphOne}}</p>
      <p>{{blok.paragraphTwo}}</p>
      <p>{{blok.paragraphThree}}</p>
      <a :href="blok.button.url">x</a>

      <p></p>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});
console.log(props);
</script>

<style lang="scss" scoped>
</style>