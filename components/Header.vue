<template>
  <header class="header">
    <NuxtLink to="/"><h1>PartTimeJobs</h1></NuxtLink>
    <nav class="navigation">
      <ul>
        <NuxtLink to="/dodaj"><h1>Dodaj ogłoszenie</h1></NuxtLink>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
