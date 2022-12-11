import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/styles/index.scss";
import components from "@/components/UI/index";
import router from "@/router/router";
import store from "@/store/index";
import Popper from "vue3-popper";
import directives from '@/directives/index'
import {layouts} from '@/layouts/index'
const app = createApp(App);

// UI
components.forEach((component) => app.component(component.name, component));
//directive
directives.forEach((directive) => app.directive(directive.name, directive));
//lib 
app.component("Popper", Popper);
// layouts 
layouts.forEach((layout) => app.component(layout.name, layout));


app.use(router).use(store).mount("#app");
