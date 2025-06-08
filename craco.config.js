const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@root': path.resolve(__dirname, 'src'),
    },
    devServer: {
      host: '0.0.0.0', 
      port: 3000,      
    },
  },
};