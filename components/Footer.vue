<template>
  <footer class="footer">
    <NuxtLink to="/" class="footer__logo"><h2>PartTimeJobs</h2></NuxtLink>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $black;
  color: rgba(255, 255, 255, 0.8);

  &__logo {
    color: rgba(255, 255, 255, 0.8);
    h2 {
      font-size: 22px;
    }
  }
}
</style>
