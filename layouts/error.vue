<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Strona nie istnieje</h1>
    <h1 v-else>Wystąpił błąd</h1>
    <NuxtLink to="/">Przejdź do Strony głównej</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>
