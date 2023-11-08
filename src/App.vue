<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>GLF Email Domain Suggestion</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <div class="col q-ma-md">
        <glf-email-domain-suggestion v-model="email" :domains="domains" />
        <span>Email: {{ email }}</span>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GlfEmailDomainSuggestionExample",

  setup() {
    const email = ref("");

    const domains = [
      "gmail.com",
      "hotmail.com",
      "yahoo.com",
      "outlook.com",
      "bol.com.br",
      "uol.com.br",
      "ig.com.br",
      "globomail.com",
      "live.com",
      "live.com.br",
      "oi.com.br",
      "r7.com",
      "terra.com.br",
      "zipmail.com.br",
      "globo.com",
      "oi.com",
      "pop.com.br",
      "pop.com",
      "superig.com.br",
      "superig.com",
      "oi.com",
      "ig.com",
    ];

    return {
      email,
      domains,
    };
  },
};
</script>
