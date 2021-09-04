<template>
  <div class="container">
    <article class="post">
      <header class="post__header">
        <div>
          <div>
            <h2 class="post__title">{{ post.title }}</h2>
          </div>
          <div class="post__salary">
            <span>{{ post.min_salary }}</span> -
            <span>{{ post.max_salary }}</span> PLN / {{ post.salary_per }}
          </div>
        </div>
        <div>
          <h3 class="post__category">
            <span>Kategoria: </span>{{ post.language }}
          </h3>
          <h3 class="post__experience">
            <span>Doświadczenie: </span>{{ post.experience }}
          </h3>
        </div>
      </header>
      <div class="post__body">
        <h3 class="post__subtitle">Wymagania</h3>
        <div class="post__requirements">
          <span
            class="post__requirements_item"
            v-for="item in post.requirements"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="post__body post__details">
        <p v-html="post.description"></p>
      </div>
      <div class="post__body">
        <h4>
          Wyślij CV: <a :href="`mailto: ${post.email}`">{{ post.email }}</a>
        </h4>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`);
    const post = await res.json();
    return { post };
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
}

.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 6px;
  background-color: $white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    &__header {
      & > div {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__title {
    font-size: 28px;
  }

  &__subtitle {
    margin-bottom: 10px;
  }

  &__date {
    font-size: 14px;
    font-weight: 400;
    color: $grey;
  }

  &__category,
  &__experience {
    margin-top: 10px;
    font-size: 16px;
    span {
      color: $grey;
      font-weight: 400;
    }
  }

  &__body {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid $grey;
  }

  &__salary {
    margin-top: 10px;
    color: rgb(30, 198, 108);
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (min-width: 768px) {
      margin-top: 0;
      font-size: 24px;
    }
  }

  &__requirements {
    display: flex;

    &_item {
      color: $grey;
      height: 26px;
      display: inline-block;
      padding: 0 7px;
      overflow: hidden;
      font-size: 14px;
      min-width: 20px;
      line-height: 24px;
      margin-right: 6px;
      white-space: nowrap;
      border: 1px solid $grey;
      text-overflow: ellipsis;
      text-transform: lowercase;
    }
  }
}
</style>
