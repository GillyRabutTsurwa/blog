<template>
  <article v-editable="blok" class="blog-container">
    <div class="blog-img-container">
      <img :src="blok.blogImage.filename">
    </div>

    <div class="blog-content">
      <!-- <NuxtLink v-bind:to="`/${dynamicBackLink}/posts`" class="link-back">
        <i class="fa fa-hand-o-left" aria-hidden="true"></i>
      </NuxtLink> -->

      <h1 class="blog-content__title">{{blok.blogTitle}}</h1>
      <!-- <p class="blog-content__description">{{blok.paragraphOne}}</p>
      <p class="blog-content__description">{{blok.paragraphTwo}}</p>
      <p class="blog-content__description">{{blok.paragraphThree}}</p> -->
      <p v-for="(currentParagraph, property) in state.para" :key="property" class="blog-content__description">
        {{currentParagraph}}
      </p>
      <!-- <p class="blog-content__date">Post Created: {{formatDate(article.createdAt)}}</p> -->
    </div>
  </article>

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

const formatDate = (currentDate) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(currentDate).toLocaleDateString("en-GB", options);
};
</script>
  
  <style>
.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  min-height: 100vh;
}

.blog-img-container,
.blog-content {
  height: 100%;
}

.blog-img-container {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.blog-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  position: relative;
  /* TESTING */
  padding-bottom: 7.5rem;
  overflow: hidden scroll;
}

.blog-content__title {
  font-weight: bolder;
  font-size: 5rem;
  margin: 4.5rem 0;
}

.blog-content__description {
  font-size: 2.25rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.blog-content__date {
  font-weight: bold;
  font-style: italic;
}

.blog-content__navigation {
  width: 50rem;
  margin: 0 auto;
}

.blog-content__navigation--title {
  text-align: center;
  font-weight: bold;
}

.blog-content__navigation--toc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-content__navigation--toc li {
  margin: 0.55rem;
}
</style>

/*  */
