const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
};
