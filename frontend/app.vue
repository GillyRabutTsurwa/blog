<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script setup>
const query = groq`*[_type == "post"]`;
const { data } = await useSanityQuery(query);
console.log(data);
</script>