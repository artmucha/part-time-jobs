<template>
  <div class="container">
    <template v-for="post in posts">
      <Card :key="post.id" :post="post" />
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px;
}
</style>
