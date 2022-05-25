const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5005",
      changeOrigin: true,
    })
  );
  // app.use(
  //     '/scraping',
  //     createProxyMiddleware({
  //         target: 'https://www.yna.co.kr',
  //         changeOrigin: true,
  //     })
  // );
};
