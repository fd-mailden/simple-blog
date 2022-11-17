const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/assets/styles/base/_variables.scss";
          @import "~@/assets/styles/base/_mixins.scss";
        `,
       
      }
    }
  }
})
