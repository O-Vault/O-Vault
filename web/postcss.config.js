const tailwindcss = require('tailwindcss');

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss
  ],
};