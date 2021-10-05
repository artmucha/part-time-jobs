<template>
  <article class="card">
    <header class="card__header">
      <h2 class="card__title">{{ post.title }}</h2>
      <h3 class="card__salary">
        {{ post.salary_min }} - {{ post.salary_max }} PLN /
        {{ post.salary_per }}
      </h3>
    </header>
    <div class="card__body">
      <div>
        <h3 class="card__company">{{ post.company }}</h3>
        <h3 class="card__experience">
          <span>Poziom: </span>{{ post.experience.label }}
        </h3>
      </div>
      <div class="card__requirements">
        <span
          class="card__requirements_item"
          v-for="(item, index) in post.requirements.slice(0,5)"
          :key="index"
          >{{ item }}</span
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true
    }
  }
};
</script>