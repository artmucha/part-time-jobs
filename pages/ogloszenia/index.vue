<template>
  <div class="container">
    <Empty v-if="!posts.length" />
    <template v-for="post in posts">
      <Card :key="post._id" :post="post" />
    </template>
  </div>
</template>

<script>
export default {
  watchQuery: ["experience"],

  async asyncData({ $config: { baseURL }, env, query }) {
    const exp = query.experience ? query.experience : "";
    const res = await fetch(`${baseURL}/api/posts?experience=${exp}`);
    const posts = await res.json();
    return { posts };
  }
};
</script>
