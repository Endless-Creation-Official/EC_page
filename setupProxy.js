const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://43.202.40.240:8080',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true
    })
  );
};  
