<template>
  <div>
    <h1 v-if="error.statusCode === 404">To ogłoszenie nie jest już aktualne</h1>
    <h1 v-else>Wystąpił błąd</h1>
    <NuxtLink to="/">Strona główna</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>
