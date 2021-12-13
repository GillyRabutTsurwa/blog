<template>
  <li class="authour-card">
    <NuxtLink v-bind:to="`/tech/blogs/authours/${authour.name}`">
      <img v-bind:src="require(`~/assets/img/${authour.img}`)" v-bind:alt="authour.name">
      <div class="authour-card__info">
        <h2 class="font-bold">{{authour.name}}</h2>
        <p class="font-bold text-gray-600 text-sm">{{authour.bio}}</p>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    authour: {
      type: Object,
      required: true,
    },
  },
  computed: {
    parentComponentName() {
      // remove the < and > in the string. je sais qu'y'a un meilleur moyen de faire ceci
      return this.$parent._name
        .split("")
        .filter((currentCharacter) => currentCharacter !== "<" && currentCharacter !== ">")
        .join("");
    },
  },
  mounted() {
    console.log(this.$parent._name);
    console.log(this.parentComponentName);
  },
};
</script>

<style>
.authour-card,
.authour-card:link,
.authour-card:visited {
  display: inline-block;
  width: auto;
  height: 12rem;

  /* -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.075); */
  -webkit-transition: all 0.5s ease-in;
  transition: all 0.5s ease-in;
}

.authour-card:hover,
.authour-card:active {
  -webkit-box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
}

.authour-card img {
  width: auto;
  height: 24rem;
  object-fit: cover;
}

.authour-card__info {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
}
</style>