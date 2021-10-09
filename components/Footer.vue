<template>
  <footer class="footer">
    <div class="footer__container">
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
    </div>
    <p class="footer__copyright">Copyright © {{ new Date().getFullYear() }} <NuxtLink to="https://parttimejobs.pl">PartTimeJobs</NuxtLink> - Wszystkie prawa zastrzeżone.</p>
    <FlashMessage 
      v-if="!cookie"
      message="PartTimeJobs stosuje ciasteczka w celu realizacji usług. Korzystając ze strony wyrażasz zgodę na ich używanie. Dowiedz się więcej z naszej Polityki Prywatności." 
      action="Akceptuję"
      @onClick="acceptCookies"
    />
  </footer>
</template>
<script>
const { language } = require('~/static/constans.js');
export default {
  data() {
    return {
      language,
      cookie: false,
    }
  },

  methods: {
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      this.cookie = true;
    },

    getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },

    checkCookie() {
      let cookie = this.getCookie("acceptCookies");
      if (cookie != "") this.cookie = true;
    },

    acceptCookies() {
      this.setCookie("acceptCookies", true, 30);
    }
  },

  mounted() {
    this.checkCookie();
  }
};
</script>