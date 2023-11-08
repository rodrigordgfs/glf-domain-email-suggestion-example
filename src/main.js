import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import GlfEmailDomainSuggestion from "glf-email-domain-suggestion";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(GlfEmailDomainSuggestion)
  .mount("#app");
