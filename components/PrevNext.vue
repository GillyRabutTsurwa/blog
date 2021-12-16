<template>
  <div>
    <div v-if="$nuxt._route.path.includes('tech')" class="prev-next tech">
      <NuxtLink v-if="prev" v-bind:to="`/tech/posts/${prev.slug}`" class="prev-next__link">
        <i v-if="prev" class="fa fa-hand-o-left" aria-hidden="true"></i>
        {{prev.title}}
      </NuxtLink>
      <NuxtLink v-if="next" v-bind:to="`/tech/posts/${next.slug}`" class="prev-next__link">
        {{next.title}}
        <i v-if="next" class="fa fa-hand-o-right" aria-hidden="true"></i>
      </NuxtLink>
    </div>

    <div v-else-if="$nuxt._route.path.includes('personal')" class="prev-next personal">
      <NuxtLink v-if="prev" v-bind:to="`/personal/posts/${prev.slug}`" class="prev-next__link">
        <i v-if="prev" class="fa fa-hand-o-left" aria-hidden="true"></i>
        {{prev.title}}
      </NuxtLink>
      <NuxtLink v-if="next" v-bind:to="`/personal/posts/${next.slug}`" class="prev-next__link">
        {{next.title}}
        <i v-if="next" class="fa fa-hand-o-right" aria-hidden="true"></i>
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  created() {
    console.log(this.prev);
    console.log(this.next);
    console.log(this.$nuxt._route.path);
  },
};
</script>

<style scoped>
.prev-next {
  display: flex;
  justify-content: space-around; /* NOTE: this is brilliant. with only one item, ca prend le meme effet que justify-content: center*/
}

/* classe dynamique */
.one-link-only {
  justify-content: center;
}

.prev-next .prev-next__link:link,
.prev-next .prev-next__link:visited {
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.5s ease-in;
}

.prev-next .prev-next__link:hover,
.prev-next .prev-next__link:active {
  text-decoration: underline;
}
</style>