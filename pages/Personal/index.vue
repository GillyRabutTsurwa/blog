<template>
  <div>
    <h2 class="introduction-title personal">Personal Blogs</h2>

    <p class="introduction-paragraph">
      Welcome to my personal blogs page. On this side, you will get to know me more personally (obviously). There will be nothing about web development here. Instead, it will be about the interesting things that I am doing in my life, my opinions and reviews on various random subjects that are not heavy nor intense, among many other things. Although this is going to be a personal blog, my intent is to make this lighthearted.</p>
    <p class="introduction-paragraph">
      However, the posts on here will not be brainless, nor shallow. They will have substance on them, in the hope that this might help whoever is taking the time to read them, although these posts will be primarily for me and it matters little if anybody reads it. In this page, I will be expressing myself more than I do on my social media platforms, so in case one would like to get to know me as a person, I suggest reading these blogs.
    </p>
    <p class="introduction-paragraph">Anyways, enough waffling. Take a look at my blogs. Or, if you want to cross over to my tech blogs, consult the links below.</p>

    <div class="introduction-links">
      <NuxtLink class="button--grey" to="/personal/blogs">All Pesronal Blogs</NuxtLink>
      <NuxtLink class="button--grey" to="/tech">Tech Page</NuxtLink>
      <NuxtLink class="button--grey" to="/">Home</NuxtLink>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* TESTING */
p {
  font-size: 2rem;
  width: 50%;
}
</style>