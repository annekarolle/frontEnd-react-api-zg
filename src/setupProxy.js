const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',  // Altere para a URL do seu servidor Django
      changeOrigin: true,
    })
  );
};
