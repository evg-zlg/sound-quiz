const tailWindCss = require("tailwindcss");
const autoPrefixer1 = require("autoprefixer");

module.exports = {
  plugins: [
    "postcss-preset-env",
    tailWindCss,
    // autoPrefixer1,
  ],
};