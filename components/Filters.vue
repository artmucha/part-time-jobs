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
        v-for="lang in language"
        :key="lang.id"
        :to="`/ogloszenia${lang.value}${param}`"
        class="filter__item"
      >
        {{ lang.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experience: [
        {
          id: 1,
          label: "Junior",
          value: "junior",
          icon: "junior"
        },
        {
          id: 2,
          label: "Mid",
          value: "mid",
          icon: "mid"
        },
        {
          id: 3,
          label: "Senior",
          value: "senior",
          icon: "senior"
        }
      ],

      language: [
        {
          id: 0,
          label: "Wszystkie",
          value: ""
        },
        {
          id: 1,
          label: "JavaScript",
          value: "/javascript"
        },
        {
          id: 2,
          label: "PHP",
          value: "/php"
        },
        {
          id: 3,
          label: "Java",
          value: "/java"
        },
        {
          id: 4,
          label: "Python",
          value: "/python"
        },
        {
          id: 5,
          label: "C",
          value: "/c"
        },
        {
          id: 6,
          label: "Ruby",
          value: "/ruby"
        },
        {
          id: 7,
          label: ".NET",
          value: "/net"
        },
        {
          id: 8,
          label: "Go",
          value: "/golang"
        },
        {
          id: 9,
          label: "Scala",
          value: "/scala"
        },
        {
          id: 10,
          label: "Mobile",
          value: "/mobile"
        }
      ]
    };
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