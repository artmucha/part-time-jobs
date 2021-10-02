<template>
  <div class="container">
    <article class="post">
      <header class="post__header">
        <div>
          <div>
            <h2 class="post__title">{{ data.post.title }}</h2>
          </div>
          <div class="post__salary">
            <span>{{ data.post.salary_min }}</span> -
            <span>{{ data.post.salary_max }}</span> PLN / {{ data.post.salary_per }}
          </div>
        </div>
        <div>
          <h3 class="post__category">
            <span>Kategoria: </span>{{ data.post.language.label }}
          </h3>
          <h3 class="post__experience">
            <span>Doświadczenie: </span>{{ data.post.experience.label }}
          </h3>
        </div>
      </header>
      <div class="post__body">
        <h3 class="post__subtitle">Wymagania</h3>
        <div class="post__requirements">
          <span
            class="post__requirements_item"
            v-for="(item, index) in data.post.requirements"
            :key="index"
            >{{ item }}</span
          >
        </div>
      </div>
      <div class="post__body post__details">
        <div v-html="data.post.description"></div>
      </div>
      <div class="post__body post__contact">
        <h4>
          Wyślij CV:
          <a v-if="showEmail" :href="`mailto: ${data.post.email}`">{{
            data.post.email
          }}</a>
          <p v-else @click="showEmail = !showEmail">pokaż email</p>
        </h4>
        <button v-if="data.admin" @click="deletePost(data.post._id)">usuń</button>
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

  methods: {
    async deletePost(id) {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
    }
  },

  async asyncData({ $config: { baseURL }, params, query }) {
    const admin = query.admin ? query.admin : "";
    const res = await fetch(`${baseURL}/api/posts/${params.slug}?admin=${admin}`);
    const data = await res.json();
    return { data };
  }
};
</script>