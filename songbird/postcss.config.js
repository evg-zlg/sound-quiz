const postCssConfig = {
  syntax: 'postcss-scss',
  plugins: ['tailwindcss',['@csstools/postcss-sass', {}], 'autoprefixer'],
};

module.exports = postCssConfig;
