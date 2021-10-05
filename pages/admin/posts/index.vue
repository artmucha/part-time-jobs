<template>
  <div class="container">
    <Empty v-if="!posts.length" />
    <template v-for="post in posts">
      <NuxtLink :key="post._id" :to="`/admin/posts/${post.slug}`">
        <Card :post="post" />
      </NuxtLink>
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({ $config: { baseURL }, query, redirect }) {
    const admin = query.admin ? query.admin : "";
    if(!admin) redirect(302, '/');
    try {
      const res = await fetch(`${baseURL}/api/admin/posts?admin=${admin}`);
      const posts = await res.json();
      return { posts };
    } catch (error) {
      console.log(error)
    }
  }
};
</script>