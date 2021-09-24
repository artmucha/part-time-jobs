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