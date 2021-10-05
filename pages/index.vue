<template>
  <div class="container">
    <Empty v-if="!posts.length" />
    <template v-for="post in posts">
      <NuxtLink :key="post._id" :to="`/ogloszenie/${post.slug}`">
        <Card :post="post" />
      </NuxtLink>
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