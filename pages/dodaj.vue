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
          <option v-for="exp in experience" :key="exp.id" :value="JSON.stringify(exp)">{{ exp.label }}</option>
        </select>
      </label>

      <label class="label">
        Główna technologia / język*
        <select name="language" id="language" @change="setValue">
          <option v-for="lang in language" :key="lang.id" :value="JSON.stringify(lang)">{{
            lang.label
          }}</option>
        </select>
      </label>

      <label class="label">Wymagania</label>
      <div class="form__requirements">
        <label v-for="tech in technology" :key="tech.id">
          <input
            type="checkbox"
            name="requirements"
            :value="tech.value"
            @change="setValue"
          />
          {{ tech.label }}
        </label>
      </div>

      <label class="label">
        Opis stanowiska*
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
            name="salary_min"
            id="salary_min"
            required
            @change="setValue"
          />
          -
          <input
            type="text"
            name="salary_max"
            id="salary_max"
            required
            @change="setValue"
          />
          /
          <select name="salary_per" id="salary_per" @change="setValue">
            <option value="miesiąc">miesiąc</option>
            <option value="dzień">dzień</option>
            <option value="godzinę">godzinę</option>
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
        Zapoznałem się z <NuxtLink to="/regulamin" target="_blank">regulaminem</NuxtLink> i <NuxtLink to="/polityka" target="_blank">polityką prywatności</NuxtLink> oraz akceptuję ich zapisy.
      </label>

      <button :class="['form__submit', status]" @click.prevent="submit">
        <span>{{ buttonText }}</span>
      </button>

      <ul class="form__errors" v-if="errors.length">
        <li v-for="(error, index) in errors" :key="index">{{ error.msg }}</li>
      </ul>
    </form>
  </div>
</template>

<script>
const { experience, language, technology } = require('~/static/constans.js');
export default {
  data() {
    return {
      buttonText: "Dodaj",
      status: "",
      errors: [],
      experience,
      language,
      technology,

      formData: {
        title: "",
        experience: {label: "Junior", value: "junior"},
        language: {label: "JavaScript", value: "javascript"},
        requirements: [],
        description: "",
        company: "",
        salary_min: null,
        salary_max: null,
        salary_per: "miesiąc",
        email: "",
        slug: "",
        regulations: false,
        date: "",
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
      } else if (e.target.name == "experience" || e.target.name == "language") {
        this.formData = { ...this.formData, [e.target.name]: JSON.parse(e.target.value) };
      } else if (e.target.name == "regulations" && e.target.checked) {
        this.formData = {
          ...this.formData,
          [e.target.name]: !!e.target.value
        };
      } else {
        this.formData = { ...this.formData, [e.target.name]: e.target.value };
      }
    },

    async submit() {
      this.status = "pending";
      try {
        let { title } = this.formData;
        title = title
          .split(" ")
          .join("-")
          .toLowerCase();
        const date = new Date().getTime();
        const slug = `${title}-${date}`;
        this.formData.slug = slug;
        this.formData.date = new Intl.DateTimeFormat('pl-PL', { dateStyle: 'long' }).format(new Date());

        const res = await fetch("/api/posts", {
          method: "POST",
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
};
</script>