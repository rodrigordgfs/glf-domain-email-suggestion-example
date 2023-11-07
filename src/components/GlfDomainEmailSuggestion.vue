<template>
  <div>
    <q-input
      ref="email"
      type="email"
      maxlength="100"
      v-model="email"
      :label="label"
      :filled="filled"
      :square="square"
      :counter="counter"
    />

    <q-list
      v-if="showSuggestionList"
      class="custom-suggestion-list"
      :style="{ width: emailListWidth + 'px' }"
      bordered
    >
      <q-item
        v-for="(domain, index) in filteredDomains"
        :key="index"
        clickable
        @click="selectSuggestion(domain)"
      >
        {{ domain }}
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: "GlfDomainEmailSuggestion",

  props: {
    domains: {
      type: Array,
      required: true,
    },

    maxDomainsVisible: {
      type: Number,
      default: 5,
    },

    modelValue: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: "Digite seu e-mail",
    },

    filled: {
      type: Boolean,
      default: true,
    },

    square: {
      type: Boolean,
      default: true,
    },

    counter: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      email: "",
      showSuggestionList: false,
      suggestionSelected: false,
    };
  },

  watch: {
    email(value) {
      if (!this.domainFilled) {
        this.showSuggestion();
      } else {
        this.showSuggestionList = false;
        this.sugestionSelected = false;
      }
      this.$emit("update:modelValue", value);
    },
  },

  computed: {
    domainFilled() {
      const regex = /\.com(\.br)?$/i;
      return regex.test(this.email);
    },

    emailListWidth: function () {
      return this.$refs.email.$el.offsetWidth;
    },

    filteredDomains() {
      if (this.domains) {
        const enteredDomain = this.email.split("@")[1];
        return this.domains
          .filter((domain) => domain.startsWith(enteredDomain))
          .slice(0, this.maxDomainsVisible);
      } else {
        return [];
      }
    },
  },

  methods: {
    showSuggestion() {
      if (this.email.includes("@") && this.sugestionSelected === false) {
        this.showSuggestionList = true;
        this.sugestionSelected = false;
      } else {
        this.showSuggestionList = false;
        this.sugestionSelected = false;
      }
    },

    selectSuggestion(suggestion) {
      this.email = this.email.split("@")[0] + "@" + suggestion;
      this.sugestionSelected = true;
      this.showSuggestionList = false;
    },
  },
};
</script>

<style>
.custom-suggestion-list {
  position: fixed;
  z-index: 9999;
  background: #fff;
  margin-top: -20px;
}
</style>
