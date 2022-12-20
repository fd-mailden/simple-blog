<script setup>
import { reactive, computed } from "vue";
import { ROUTER } from "@/settings/vue-routs";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, email } from "@vuelidate/validators";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const formData = reactive({
  login: "",
  password: "",
});
const rules = computed(() => {
  return {
    login: { required, email },
    password: { required, maxLength: maxLength(8) },
  };
});

const v$ = useVuelidate(rules, formData);
const callback = () => {
  router.push(ROUTER.DASHBOARD.path);
};

async function navigateToDashboard() {
  const result = await v$.value.$validate();
  if (result) {
    store.dispatch("auth/authorization", { ...formData, callback });
  }
}
</script>

<template>
  <form class="form" @submit.prevent="navigateToDashboard">
    <base-input
      placeholder="Username"
      :marginTop="true"
      v-model="formData.login"
      type="email"
    >
      <base-icon componentName="Human" />
    </base-input>
    <p v-for="error in v$.login.$errors" :key="error.$uid" class="error-notify">
      {{ error.$message }}
    </p>
    <base-input
      placeholder="Password"
      :marginTop="true"
      v-model="formData.password"
      type="password"
    >
      <base-icon componentName="KeyIcon" />
    </base-input>
    <p
      v-for="error in v$.password.$errors"
      :key="error.$uid"
      class="error-notify"
    >
      {{ error.$message }}
    </p>
    <div class="remember">
      <base-checkbox label="Remember me" />
      <button class="forgot-pass">Forgot Password?</button>
    </div>
    <base-button
      className="full-width"
      type="submit"
      @click="navigateToDashboard"
      >Login
    </base-button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  margin-top: 27px;
  width: 100%;
  max-width: 324px;
}

.remember {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
}

.forgot-pass {
  font-family: "Open Sans";
  font-size: 12px;
  border: none;
  background: transparent;
}

.forgot-pass {
  font-size: 12px;
  line-height: 16px;
  color: $main-gray;
}

.error-notify {
  color: #e73737;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
