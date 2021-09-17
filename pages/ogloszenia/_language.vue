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

  async asyncData({ env, params, query }) {
    const exp = query.experience ? query.experience : "";
    const lang = params.language ? params.language : "";
    const res = await fetch(
      `${env.baseUrl}/api/posts?language=${lang}&experience=${exp}`
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
  min-height: calc(100vh - 296px);
  margin: 0 auto;
  padding: 15px;
}
</style>
