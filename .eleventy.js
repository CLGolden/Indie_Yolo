module.exports = function (eleventyConfig) {
  // eleventyConfig.addWatchTarget("./src/sass/");
  // eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.setBrowserSyncConfig({
    files: "./public/css/**/*.css",
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
