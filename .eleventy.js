module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit));
  eleventyConfig.addFilter("shift", (arr, shift) =>
    arr.slice(shift, arr.length)
  );
  eleventyConfig.addFilter("debugJSON", (item) => {
    console.log("JSON is: ", item);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
