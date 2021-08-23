<template>
  <header class="header">
    <NuxtLink to="/" class="header__logo"><h1>PartTimeJobs</h1></NuxtLink>
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

<style lang="scss">
.header {
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0e1926;
  color: rgba(255, 255, 255, 0.8);

  &__logo {
    color: rgba(255, 255, 255, 0.8);
    h1 {
      font-size: 22px;
    }
  }
}
</style>
