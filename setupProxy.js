// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://192.168.0.9:8454',
//       pathRewrite: {
//         //naver_api로 시작되는 url을 자동 인식 -> 프록시 처리, /naver_api는 ""로 대체됨
//         '^/api': '',
//       },
//       changeOrigin: true,
//     })
//   );
// };
