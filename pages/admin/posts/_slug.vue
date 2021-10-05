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
          :value="formData.title"
          @change="setValue"
        />
      </label>

      <label class="label">
        Doświadczenie*
        <select name="experience" id="experience" @change="setValue">
          <option :value="JSON.stringify(formData.experience)" selected>{{ formData.experience.label }}</option>
          <option v-for="exp in experience" :key="exp.id" :value="JSON.stringify(exp)">{{ exp.label }}</option>
        </select>
      </label>

      <label class="label">
        Główna technologia / język*
        <select name="language" id="language" @change="setValue">
          <option :value="JSON.stringify(formData.language)" selected>{{ formData.language.label }}</option>
          <option v-for="lang in language" :key="lang.id" :value="JSON.stringify(lang)">{{
            lang.label
          }}</option>
        </select>
      </label>

      <label class="label">
        Opis stanowiska*
        <textarea name="description" id="description" :value="formData.description" @change="setValue">
        </textarea>
      </label>

      <label class="label">
        Nazwa firmy / zleceniodawca*
        <input
          type="text"
          name="company"
          id="company"
          required
          :value="formData.company"
          @change="setValue"
        />
      </label>

      <label>
        <input
          type="checkbox"
          name="accepted"
          id="accepted"
          required
          @change="setValue"
        />
        Zaakceptuj
      </label>

      <button :class="['form__submit', status]" @click.prevent="updatePost">
        <span>{{ buttonText }}</span>
      </button>

      <ul class="form__errors" v-if="errors.length">
        <li v-for="(error, index) in errors" :key="index">{{ error.msg }}</li>
      </ul>
    </form>
  </div>
</template>

<script>
const { experience, language } = require('~/static/constans.js');
export default {
  data() {
    return {
      buttonText: "Opublikuj",
      status: "",
      errors: [],
      experience,
      language,
      formData: {
        title: "",
        experience: {label: "", value: ""},
        language: {label: "", value: ""},
        requirements: [],
        description: "",
        company: "",
        salary_min: null,
        salary_max: null,
        salary_per: "",
        email: "",
        slug: "",
        regulations: false,
        date: "",
        accepted: false,
      }
    };
  },

  methods: {

    async fetchPost() {
      const { slug } = $nuxt.context.params;
      const { admin } = $nuxt.context.query;
      if (!admin) $nuxt.context.redirect('/');
      const res = await fetch(`/api/admin/posts/${slug}?admin=${admin}`);
      this.formData = await res.json();
    },

    setValue(e) {
      if (e.target.name == "requirements") {
        if (e.target.checked) {
          this.formData.requirements.push(e.target.value);
        } else {
          this.formData.requirements = this.formData.requirements.filter(
            item => item != e.target.value
          );
        }
      } else if (e.target.name == "experience" || e.target.name == "language") {
        this.formData = { ...this.formData, [e.target.name]: JSON.parse(e.target.value) };
      } else if (e.target.name == "accepted" && e.target.checked) {
        this.formData = {
          ...this.formData,
          [e.target.name]: !!e.target.value
        };
      } else {
        this.formData = { ...this.formData, [e.target.name]: e.target.value };
      }
    },

    async updatePost() {
      this.status = "pending";
      try {
        const res = await fetch(`/api/admin/posts`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.formData)
        });

        const { errors } = await res.json();
        if (errors) {
          this.errors = errors;
          this.status = "error";
          this.buttonText = "Błąd!";
          setTimeout(() => {
            this.status = "";
            this.buttonText = "Dodaj";
          }, 2000);
        } else {
          this.status = "success";
          this.buttonText = "Dodano";
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        }
      } catch (error) {
        this.status = "error";
        this.buttonText = "Błąd!";
      }
    }
  },

  mounted() {
    this.fetchPost();
  }
};
</script>