<template>
  <div class="filters">
    {{ $route.params }}
    {{ $route.query }}
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

<style lang="scss">
.filters {
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: "";
    width: 80px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(14, 25, 38, 1) 100%
    );
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (min-width: 992px) {
    flex-direction: row;
  }
}

.filter {
  padding: 15px 0;
  display: flex;
  align-items: center;
  overflow-x: auto;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    color: rgba(255, 255, 255, 0.8);
    transition: ease-in-out 0.2s color;

    &:last-of-type {
      margin-right: 100px;
    }

    span {
      display: inline-block;
      width: 42px;
      height: 42px;
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid $grey;
      border-radius: 50%;
      overflow: hidden;
      transition: ease-in-out 0.2s background-color;

      img {
        width: 100%;
        height: auto;
      }
    }

    &:hover {
      color: rgba(255, 255, 255, 1);

      span {
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
