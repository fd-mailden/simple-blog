<template>
  <section class="login">
    <h1 class="login__title">Welcome back!</h1>
    <p class="login__subtitle">Sign in to get the most out of nuntium.</p>
    <LoginForm/>
  </section>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm.vue";
export default {
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  &__title {
    font-family: "Libre Baskerville";
    font-weight: 700;
    font-size: 33px;
    line-height: 41px;
    text-align: center;
  }
  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
}
</style>
