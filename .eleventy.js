module.exports = function(eleventyConfig) {

  // copy assets/img to _site/img
  eleventyConfig.addPassthroughCopy({"src/assets/img": "img"});

  // copy robots.txt and sitemap.xml to _site
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});
  eleventyConfig.addPassthroughCopy({"src/sitemap.xml": "sitemap.xml"});

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
