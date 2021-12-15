<template>
  <div>
    <NuxtLink to="/" class="link-back">
      <i class="fa fa-home" aria-hidden="true"></i>
    </NuxtLink>
    <h2 class="blogs-page-title">{{genre}} Posts</h2>
  </div>
</template>

<script>
export default {
  props: {
    genre: {
      type: String,
      required: false,
      default: "All Blogs",
    },
  },
};
</script>

<style>
.blogs-page-title {
  text-align: center;
  margin-bottom: 3.5rem;
  font-size: 5rem;
}

.link-back {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 3rem;
}

.blogs-page-title,
.link-back {
  color: rgb(34, 34, 71);
}
</style>