<template>
  <div class="flex justify-between">
    <NuxtLink v-if="prev" v-bind:to="`/blog/${prev.slug}`" class="font-bold text-primary hover:underline">{{prev.title}}</NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink v-if="next" v-bind:to="`/blog/${next.slug}`" class="font-bold hover:underline">{{next.title}}</NuxtLink>
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
  },
};
</script>

<style>
</style>