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
      <div class="post__body post__contact">
        <h4>
          Wyślij CV:
          <a v-if="showEmail" :href="`mailto: ${post.email}`">{{
            post.email
          }}</a>
          <p v-else @click="showEmail = !showEmail">pokaż email</p>
        </h4>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEmail: false
    };
  },

  async asyncData({ $config: { baseURL }, params }) {
    const res = await fetch(`${baseURL}/api/posts/${params.slug}`);
    const post = await res.json();
    return { post };
  }
};
</script>