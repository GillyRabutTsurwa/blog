<template>
  <div v-editable="blok" class="about">
    <h3>{{blok.titre}}</h3>

    <p v-for="(currentParagraph, property) in state.para" :key="property">
      {{currentParagraph}}
    </p>

    <a :href="blok.button.url">x</a>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: {
    type: Object,
  },
});
console.log(props);

const state = reactive({
  para: {},
});
const paragraphs = Object.entries(props.blok).filter((currentArray) => currentArray[0].includes("paragraph"));
console.log(paragraphs);
state.para = Object.fromEntries(paragraphs);
console.log(state.para);
</script>

<style scoped>
</style>