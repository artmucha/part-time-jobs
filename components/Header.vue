<template>
  <header class="header">
    <div class="header__top">
      <NuxtLink to="/" class="header__logo"><h1>PartTimeJobs</h1></NuxtLink>
      <NuxtLink to="/dodaj" class="header__action">Dodaj</NuxtLink>
    </div>
    <div class="header__bottom">
      <Filters />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background: $black;
  color: rgba(255, 255, 255, 0.8);

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid $grey;
  }

  &__bottom {
    padding: 0 15px;
    border-bottom: 1px solid $grey;
  }

  &__logo {
    color: rgba(255, 255, 255, 0.8);
    h1 {
      font-size: 22px;
    }
  }

  &__action {
    padding: 5px 20px;
    color: $white;
    background-color: #e91e63;
    border: 1px solid #e91e63;
    border-radius: 50px;
    transition: ease-in-out 0.2s background-color;

    &:hover {
      background-color: darken(#e91e63, 10%);
    }
  }
}
</style>
