const proxyHost = "http://api.xxx.com/mock/xxx/"
module.exports = {
  "/context": {
    target: "http://api.xxx.com/mock/xxx/",
    host: proxyHost,
    secure: false,
    changeOrigin: true,
  },
  "/module/auth/api/login/go": {
    target: "http://test.oa.sogou-inc.com/",
    secure: false,
    changeOrigin: true,
  },
}
