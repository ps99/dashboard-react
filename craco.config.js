// craco.config.js
/* eslint-disable global-require */
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};
/* eslint-disable global-require */
