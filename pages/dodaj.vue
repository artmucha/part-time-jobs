<template>
  <div class="container">
    <form class="form">
      <label class="label">
        Stanowisko*
        <input
          type="text"
          name="title"
          id="title"
          required
          @change="setValue"
        />
      </label>

      <label class="label">
        Doświadczenie*
        <select name="experience" id="experience" @change="setValue">
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
      </label>

      <label class="label">
        Główna technologia / język*
        <select name="language" id="language" @change="setValue">
          <option v-for="lang in language" :value="lang.label">{{
            lang.label
          }}</option>
        </select>
      </label>

      <label class="label">Wymagania</label>
      <div class="form__requirements">
        <label v-for="lang in language">
          <input
            type="checkbox"
            name="requirements"
            :value="lang.label"
            @change="setValue"
          />
          {{ lang.label }}
        </label>
      </div>

      <label class="label">
        Opis stanowiska
        <textarea name="description" id="description" @change="setValue">
        </textarea>
      </label>

      <label class="label">
        Nazwa firmy / zleceniodawca*
        <input
          type="text"
          name="company"
          id="company"
          required
          @change="setValue"
        />
      </label>

      <label class="label">
        Stawka (widełki)*
        <span class="form__salary">
          <input
            type="text"
            name="min_salary"
            id="min_salary"
            required
            @change="setValue"
          />
          -
          <input
            type="text"
            name="max_salary"
            id="max_salary"
            required
            @change="setValue"
          />
          /
          <select name="salary_per" id="salary_per" @change="setValue">
            <option value="miesiąc">miesiąc</option>
            <option value="dzień">dzień</option>
            <option value="godzina">godzina</option>
          </select>
          PLN
        </span>
      </label>

      <label class="label">
        E-mail*
        <input
          type="email"
          name="email"
          id="email"
          required
          @change="setValue"
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="regulations"
          id="regulations"
          required
          @change="setValue"
        />
        Zapoznałem się z regulaminem i akceptuję jego zapisy.
      </label>

      <button class="form__submit" @click.prevent="submit">Dodaj</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: [
        {
          id: 0,
          label: "Angular",
          value: "angular"
        },
        {
          id: 1,
          label: "AWS",
          value: "aws"
        },
        {
          id: 2,
          label: "C",
          value: "c"
        },
        {
          id: 3,
          label: "C++",
          value: "cplusplus"
        },
        {
          id: 4,
          label: "C#",
          value: "csharp"
        },
        {
          id: 5,
          label: "Cassandra",
          value: "cassandra"
        },
        {
          id: 6,
          label: "CSS",
          value: "css"
        },
        {
          id: 7,
          label: "Django",
          value: "django"
        },
        {
          id: 8,
          label: "Docker",
          value: "docker"
        },
        {
          id: 9,
          label: "Drupal",
          value: "drupal"
        },
        {
          id: 10,
          label: "Express",
          value: "express"
        },
        {
          id: 11,
          label: "Flask",
          value: "flask"
        },
        {
          id: 12,
          label: "Flutter",
          value: "flutter"
        },
        {
          id: 13,
          label: "GIT",
          value: "git"
        },
        {
          id: 14,
          label: "Go",
          value: "golang"
        },
        {
          id: 15,
          label: "Google Cloud Platform",
          value: "gcp"
        },
        {
          id: 16,
          label: "Google Firebase",
          value: "firebase"
        },
        {
          id: 17,
          label: "HTML",
          value: "html"
        },
        {
          id: 18,
          label: "Java",
          value: "java"
        },
        {
          id: 19,
          label: "JavaScript",
          value: "javascript"
        },
        {
          id: 20,
          label: "Joomla",
          value: "joomla"
        },
        {
          id: 21,
          label: "Kotlin",
          value: "kotlin"
        },
        {
          id: 22,
          label: "Kubernetes",
          value: "kubernetes"
        },
        {
          id: 23,
          label: "Laravel",
          value: "laravel"
        },
        {
          id: 24,
          label: "Microsoft Azure",
          value: "azure"
        },
        {
          id: 25,
          label: "MongoDB",
          value: "mongodb"
        },
        {
          id: 26,
          label: "MySQL",
          value: "mysql"
        },
        {
          id: 27,
          label: ".NET",
          value: "net"
        },
        {
          id: 28,
          label: "NodeJS",
          value: "nodejs"
        },
        {
          id: 29,
          label: "Objective C",
          value: "objective-c"
        },
        {
          id: 30,
          label: "PHP",
          value: "php"
        },
        {
          id: 31,
          label: "Play Framework",
          value: "play-framework"
        },
        {
          id: 32,
          label: "Postgres",
          value: "postgres"
        },
        {
          id: 33,
          label: "Prestashop",
          value: "prestashop"
        },
        {
          id: 34,
          label: "Python",
          value: "python"
        },
        {
          id: 35,
          label: "React",
          value: "react"
        },
        {
          id: 36,
          label: "React Native",
          value: "react-native"
        },
        {
          id: 37,
          label: "Redis",
          value: "redis"
        },
        {
          id: 38,
          label: "Ruby",
          value: "ruby"
        },
        {
          id: 39,
          label: "Ruby on rails",
          value: "ror"
        },
        {
          id: 40,
          label: "Sass/Scss",
          value: "sass"
        },
        {
          id: 41,
          label: "Scala",
          value: "scala"
        },
        {
          id: 42,
          label: "Sinatra",
          value: "sinatra"
        },
        {
          id: 43,
          label: "Swift",
          value: "swift"
        },
        {
          id: 44,
          label: "Svelte",
          value: "svelte"
        },
        {
          id: 45,
          label: "Symfony",
          value: "symfony"
        },
        {
          id: 46,
          label: "SQLite",
          value: "sqlite"
        },
        {
          id: 47,
          label: "Web Components",
          value: "web-components"
        },

        {
          id: 48,
          label: "Wordpress",
          value: "wordpress"
        },
        {
          id: 49,
          label: "Woocommerce",
          value: "woocommerce"
        },
        {
          id: 50,
          label: "VueJS",
          value: "vue"
        }
      ],

      formData: {
        title: "",
        experience: "junior",
        language: "javascript",
        requirements: [],
        description: "",
        company: "",
        min_salary: "",
        max_salary: "",
        salary_per: "miesiąc",
        email: "",
        slug: "",
        regulations: false
      }
    };
  },

  methods: {
    setValue(e) {
      if (e.target.name == "requirements") {
        if (e.target.checked) {
          this.formData.requirements.push(e.target.value);
        } else {
          this.formData.requirements = this.formData.requirements.filter(
            item => item != e.target.value
          );
        }
      } else {
        this.formData = { ...this.formData, [e.target.name]: e.target.value };
      }
    },

    async submit() {
      let { title, company } = this.formData;
      title = title
        .split(" ")
        .join("-")
        .toLowerCase();
      company = company
        .split(" ")
        .join("-")
        .toLowerCase();
      const date = new Date().getTime();
      const slug = `${title}-${company}-${date}`;
      this.formData.slug = slug;

      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.formData)
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 15px;
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 6px;
  background-color: $white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.04);

  label {
    color: $black;
    margin-top: 20px;

    &.label {
      display: block;
      width: 100%;
      font-weight: 600;

      input,
      textarea {
        display: block;
        width: 100%;
      }
    }
  }

  input,
  textarea {
    border: 1px solid $grey;
    padding: 10px;
    border-radius: 6px;
  }

  textarea {
    min-height: 200px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  &__requirements {
    label {
      display: block;
    }

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      label {
        margin-right: 50px;
      }
    }
  }

  &__salary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      width: 40% !important;
    }
  }

  &__submit {
    width: 200px;
    margin: 20px auto 0 auto;
    padding: 10px 20px;
    color: $white;
    font-size: 16px;
    font-weight: 600;
    font-family: "Nunito", sans-serif;
    background-color: #e91e63;
    border: 1px solid #e91e63;
    border-radius: 50px;
    cursor: pointer;
    transition: ease-in-out 0.2s background-color;

    &:hover {
      background-color: darken(#e91e63, 10%);
    }
  }
}
</style>
