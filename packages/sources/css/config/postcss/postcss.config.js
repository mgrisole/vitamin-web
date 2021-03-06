const postcssImport = require('postcss-import');
const postcssColorMod = require('postcss-color-mod-function');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssCombineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const postcssDiscardComments = require('postcss-discard-comments');

module.exports = {
  plugins: [
    postcssImport,
    postcssColorMod,
    tailwindcss,
    autoprefixer,
    postcssCombineDuplicatedSelectors,
    postcssDiscardComments,
  ],
};
