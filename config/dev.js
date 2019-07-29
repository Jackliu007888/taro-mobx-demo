module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer: {
      port: 8868,
      proxy: {
        '/api/': {
          target: "'https://xx.xxx.cc",
          pathRewrite: {
            '^/api/': '/'
          },
          changeOrigin: true
        }
      },
    },
  }
}
