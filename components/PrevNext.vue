<template>
  <div class="flex justify-between">
    <div v-if="$nuxt._route.path.includes('tech')">
      <NuxtLink v-if="prev" v-bind:to="`/tech/blogs/${prev.slug}`" class="font-bold text-primary hover:underline">{{prev.title}}</NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink v-if="next" v-bind:to="`/tech/blogs/${next.slug}`" class="font-bold hover:underline">{{next.title}}</NuxtLink>
    </div>
    <div v-else-if="$nuxt._route.path.includes('personal')">
      <NuxtLink v-if="prev" v-bind:to="`/personal/blogs/${prev.slug}`" class="font-bold text-primary hover:underline">{{prev.title}}</NuxtLink>
      <span v-else>&nbsp;</span>
      <NuxtLink v-if="next" v-bind:to="`/personal/blogs/${next.slug}`" class="font-bold hover:underline">{{next.title}}</NuxtLink>
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

<style>
</style>