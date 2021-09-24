<template>
  <div class="filters">
    <div class="filter">
      <NuxtLink
        v-for="exp in experience"
        :key="exp.id"
        :to="`/ogloszenia/${link}?experience=${exp.value}`"
        class="filter__item"
      >
        <span>
          <img :src="require(`~/assets/img/${exp.icon}.svg`)" />
        </span>
        {{ exp.label }}
      </NuxtLink>
    </div>
    <div class="filter">
      <NuxtLink
        :to="`/ogloszenia${param}`"
        class="filter__item"
      >
        Wszystkie
      </NuxtLink>
      <NuxtLink
        v-for="lang in language"
        :key="lang.id"
        :to="`/ogloszenia/${lang.value}${param}`"
        class="filter__item"
      >
        {{ lang.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
const { experience, language } = require('~/static/constans.js');
export default {
  data() {
    return {
      experience,
      language
    }
  },
  computed: {
    link() {
      return this.$route.params.language || "";
    },
    param() {
      return this.$route.query.experience ? `?experience=${this.$route.query.experience}` : "";
    }
  }
};
</script>