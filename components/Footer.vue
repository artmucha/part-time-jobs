<template>
  <footer class="footer">
    <div>
      <NuxtLink to="/" class="footer__logo"><h2>PartTimeJobs</h2></NuxtLink>
      <p>
        PartTimeJobs.pl to serwis z ofertami pracy tymczasowej,
        dodatkowej oraz zleceniami dla programistów.
      </p>
    </div>
    <div>
      <strong>Ogłoszenia</strong>
      <NuxtLink
        v-for="lang in language"
        :key="lang.id"
        :to="`/ogloszenia/${lang.value}`"
        class="filter__item"
      >
        {{ lang.label }}
      </NuxtLink>
    </div>
    <div>
      <strong>O serwisie</strong>
      <NuxtLink to="/regulamin">Regulamin</NuxtLink>
      <NuxtLink to="/polityka">Polityka prywatności</NuxtLink>
    </div>
    <div>
      <strong>Kontakt</strong>
      <a href="mailto:kontakt@parttimejobs.pl">kontakt@parttimejobs.pl</a>
    </div>
  </footer>
</template>
<script>
const { language } = require('~/static/constans.js');
export default {
  data() {
    return {
      language
    }
  },

  mounted() {
    this.$ga.page(this.$router);
  }
};
</script>