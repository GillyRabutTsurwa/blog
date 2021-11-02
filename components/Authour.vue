<template>
  <div class="authour-card">
    <img v-bind:src="require(`~/assets/img/${authourProp.img}`)">
    <div class="authour-card__info">
      <h4 class="font-semibold">Authour</h4>
      <p>{{authourProp.name}}</p>
      <p>{{authourProp.bio}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    authourProp: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.authour-card {
  width: 100%;
  padding: 0 2rem;
}

.authour-card img {
  height: 12rem;
  object-fit: cover;
}

.authour-card__info {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
}
</style>