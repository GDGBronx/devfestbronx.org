module.exports = function(eleventyConfig) {

  // copy assets/img to _site/img
  eleventyConfig.addPassthroughCopy({"src/assets/img": "img"});
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
