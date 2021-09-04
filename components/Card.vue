<template>
  <NuxtLink :to="`ogloszenie/${post.slug}`">
    <article class="card">
      <header class="card__header">
        <h2 class="card__title">{{ post.title }}</h2>
        <h3 class="card__salary">
          {{ post.min_salary }} - {{ post.max_salary }} PLN /
          {{ post.salary_per }}
        </h3>
      </header>
      <div class="card__body">
        <div>
          <h3 class="card__company">{{ post.company }}</h3>
          <h3 class="card__experience">
            <span>Poziom: </span>{{ post.experience }}
          </h3>
        </div>
        <div class="card__requirements">
          <span
            class="card__requirements_item"
            v-for="(item, index) in post.requirements"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
    </article>
  </NuxtLink>
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

<style lang="scss" scoped>
.card {
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 6px;
  background-color: $white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.07), 0 3px 7px 0 rgba(0, 0, 0, 0.06);
  }

  &__header {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  &__title {
    color: $black;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      font-size: 18px;
      padding-right: 5px;
    }
  }

  &__salary {
    color: rgb(30, 198, 108);
    overflow: hidden;
    font-size: 12px;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
  }

  &__company {
    color: $grey;
    font-size: 12px;
    white-space: nowrap;
  }

  &__experience {
    margin-top: 10px;
    font-size: 12px;
    color: $black;
    span {
      color: $grey;
      font-weight: 400;
    }
  }

  &__requirements {
    display: none;

    @media (min-width: 768px) {
      display: flex;

      &_item {
        color: $grey;
        height: 22px;
        display: inline-block;
        padding: 0 7px;
        overflow: hidden;
        font-size: 12px;
        min-width: 20px;
        line-height: 20px;
        margin-left: 6px;
        white-space: nowrap;
        border: 1px solid $grey;
        text-overflow: ellipsis;
        text-transform: lowercase;
      }
    }
  }
}
</style>
