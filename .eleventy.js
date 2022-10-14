const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("./src/resume/william-hammond-resume.pdf");
  eleventyConfig.addPassthroughCopy("./assets");

  eleventyConfig.addWatchTarget("./src/css/tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addShortcode("addVideo", function (url, alt) {
    return `
      <div class="video-container">
        <video alt="${alt}" class="portfolioVideo" width="1280" height="720" controls="controls" onclick="this.play()">
            <source type="video/mp4" src="${url}#t=0.1">
        </video>
      </div>
    `;
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
