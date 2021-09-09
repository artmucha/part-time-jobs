<template>
  <footer class="footer">
    <div>
      <NuxtLink to="/" class="footer__logo"><h2>PartTimeJobs</h2></NuxtLink>
      <p>
        PartTimeJobs.pl to pierwszy serwis z ofertami pracy tymczasowej,
        dodatkowej oraz zleceniami dla programistów.
      </p>
    </div>
    <div>
      <strong>O serwisie</strong>
      <NuxtLink to="/regulamin">Regulamin</NuxtLink>
    </div>
    <div>
      <strong>Kontakt</strong>
      <a href="mailto:kontakt@parttimejobs.pl">kontakt@parttimejobs.pl</a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 20px 15px;
  background: $black;
  color: rgba(255, 255, 255, 0.8);

  &__logo {
    color: rgba(255, 255, 255, 0.8);
    h2 {
      font-size: 22px;
    }
  }

  strong {
    display: block;
    margin-bottom: 8px;
  }

  a {
    display: block;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 992px) {
    display: flex;
    div {
      max-width: 300px;
      margin-right: 50px;
    }
  }
}
</style>
