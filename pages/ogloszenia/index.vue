<template>
  <div class="container">
    <template v-for="post in posts">
      <Card :key="post._id" :post="post" />
    </template>
  </div>
</template>

<script>
export default {
  watchQuery: ["experience"],

  async asyncData({ query }) {
    const exp = query.experience ? query.experience : "";
    const res = await fetch(
      `http://localhost:3000/api/posts?experience=${exp}`
    );
    const posts = await res.json();
    return { posts };
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
</style>
