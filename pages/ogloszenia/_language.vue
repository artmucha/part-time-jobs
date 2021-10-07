<template>
  <div class="container">
    <Empty v-if="!posts.length" />
    <h2 v-if="posts.length" class="posts__header">Oferty dla programistów {{$nuxt.context.params.language}}</h2>
    <template v-for="post in posts">
      <NuxtLink :key="post._id" :to="`/ogloszenie/${post.slug}`">
      <Card :post="post" />
      </NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  watchQuery: ["experience"],

  head() {
    return {
      title: `PartTimeJobs | Oferty pracy i zlecenia dla programistów ${this.$route.params.language}`,
    }
  },

  async asyncData({ $config: { baseURL }, params, query }) {
    const exp = query.experience ? query.experience : "";
    const lang = params.language ? params.language : "";
      const res = await fetch(
        `${baseURL}/api/posts?language=${lang}&experience=${exp}`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const posts = await res.json();
      return { posts };
  },
};
</script>
