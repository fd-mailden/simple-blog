<template>
  <form class="form">
    <base-input placeholder="Username" :marginTop="true"
      ><base-icon componentName="Human"
    /></base-input>
    <base-input placeholder="Password" :marginTop="true"
      ><base-icon componentName="KeyIcon"
    /></base-input>
    <div class="remember">
      <base-checkbox label="Remember me" />
      <button class="forgot-pass">Forgot Password?</button>
    </div>
    <base-button className="full-width" type = "submit">Login</base-button>
  </form>
</template>

<script>
export default {};
</script>

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
</style>
