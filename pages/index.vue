<template>
  <div class="container"></div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: "Front-end Developer",
          company: "Jozin z bazin",
          salary: "30-50zł/h",
          requirements: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "Senior PHP Developer",
          company: "Comarch",
          salary: "90-150zł/h",
          requirements: ["PHP", "Laravel", "MYSQL"]
        },
        {
          title: "React Developer",
          company: "Legimi",
          salary: "3000 - 5000PLN",
          requirements: ["JavaScript", "React", "NodeJS"]
        },
        {
          title: "Java Developer",
          company: "Legimi",
          salary: "5000 - 8000PLN",
          requirements: ["Java", "Kotlin", "Scala"]
        },
        {
          title: "iOS Developer",
          company: "Legimi",
          salary: "5000 - 8000PLN",
          requirements: ["Swift", "MYQSL", "React Native"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: 1000px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
