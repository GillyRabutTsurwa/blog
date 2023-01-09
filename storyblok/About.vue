<template>
  <div v-editable="blok" class="about">
    <h3 class="about__title">{{blok.titre}}</h3>
    <p v-for="(currentParagraph, property) in state.para" :key="property" class="about__paragraph">
      {{currentParagraph}}
    </p>

    <NuxtLink :to="`/${currentButton.cached_url}`" v-for="(currentButton, index) in state.buttons" :key="currentButton.id" target="_blank" class="button--green">
      {{changeBtnNames(index)}}
    </NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute();
const routeName = route.name;
console.log(routeName);

console.log(route);
const props = defineProps({
  blok: {
    type: Object,
  },
});

console.log(props);
console.log(props.blok);

const state = reactive({
  para: {},
  buttons: {},
});

const paragraphs = Object.entries(props.blok).filter((currentArray) => currentArray[0].includes("paragraph"));
console.log(paragraphs);

state.para = Object.fromEntries(paragraphs);
console.log(state.para);

const buttons = Object.entries(props.blok).filter((currentArray) => currentArray[0].includes("button"));
console.log(buttons);

state.buttons = Object.fromEntries(buttons);
console.log(state.buttons);

/**
 * NOTE: this function is made as a way of figuring out how to properly name my buttons. I am doing this because
 * there's now way to add or modify text to a button in storyblok.
 * with the way I have written my code, I am looping through an object that consists of objects that have my data to make my links
 * so "index" is not the numeric position of an array element but is instead the property (or key) of the object (state.buttons)
 * @param {*} unofficialName = current index of the object, corresponding to the name of the property in the button object in the Storyblok API
 * more specifically, they are "button", "button1", and "button2"
 */
const changeBtnNames = (unofficialName) => {
  switch (unofficialName) {
    case "button":
      unofficialName = `${routeName === "personal" ? "Tech" : "Personal"} Page`;
      break;
    case "button2":
      unofficialName = `${routeName === "personal" ? "Personal" : "Tech"} Posts`;
      break;
    case "button3":
      unofficialName = `${routeName === "personal" ? "Tech" : "Personal"} Posts`;
    default:
      break;
  }
  return unofficialName;
};
</script>

<style scoped>
.about {
  width: 80vw;
  margin: auto;
}

.about__title {
  margin: 4rem 0;
  text-align: center;
  font-size: 4rem;
}

.about__paragraph {
  margin-bottom: 1.5rem;
}
</style>