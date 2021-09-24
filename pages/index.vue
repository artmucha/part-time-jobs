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
  async asyncData({ $config: { baseURL } }) {
    const res = await fetch(`${baseURL}/api/posts`);
    const posts = await res.json();
    return { posts };
  }
};
</script>