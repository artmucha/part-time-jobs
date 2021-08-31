<template>
  <div class="container">
    <template v-for="post in posts">
      <Card :key="posts.id" :post="post" />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Front-end Developer",
          company: "Jozin z bazin",
          salary: "30-50zł/h",
          requirements: ["HTML", "CSS", "JavaScript"],
          slug: "front-end-developer-673252347"
        },
        {
          id: 2,
          title: "Senior PHP Developer",
          company: "Comarch",
          salary: "90-150zł/h",
          requirements: ["PHP", "Laravel", "MYSQL"],
          slug: "senior-php-developer-127543248"
        },
        {
          id: 3,
          title: "React Developer",
          company: "Legimi",
          salary: "3000 - 5000PLN",
          requirements: ["JavaScript", "React", "NodeJS"],
          slug: "react-developer-32438273568"
        },
        {
          id: 4,
          title: "Java Developer",
          company: "Legimi",
          salary: "5000 - 8000PLN",
          requirements: ["Java", "Kotlin", "Scala"],
          slug: "java-developer-736r748"
        },
        {
          id: 5,
          title: "iOS Developer",
          company: "Legimi",
          salary: "5000 - 8000PLN",
          requirements: ["Swift", "MYQSL", "React Native"],
          slug: "ios-developer-48665846549"
        }
      ]
    };
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
