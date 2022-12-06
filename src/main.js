import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.scss";
import components from "@/components/UI/index";
import router from "@/router/router";
import store from "@/store/index";
import Popper from "vue3-popper";
import directives from '@/directives/index'
const app = createApp(App);

components.forEach((component) => app.component(component.name, component));

directives.forEach((directive) => app.directive(directive.name, directive));

app.component("Popper", Popper);

app.use(router).use(store).mount("#app");
