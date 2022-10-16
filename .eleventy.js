const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");

function htmlMinify(value, outputPath) {
  if (outputPath && outputPath.indexOf(".html") > -1) {
    return htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
    });
  }
  return value;
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addWatchTarget("./src/css/tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/css/");

  console.log("ENV" + process.env.ENVIRONMENT);
  if (isProduction) {
    eleventyConfig.addTransform("htmlmin", htmlMinify);
  }

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });
  eleventyConfig.addShortcode("addVideo", function (url, alt) {
    // We need to minify here because the markdown rendere will thing this is a code block otherwise
    // due to the indentation
    return htmlmin.minify(
      `
      <div class="video-container">
        <video alt="${alt}" class="portfolioVideo" width="1280" height="720" controls="controls" onclick="this.play()">
            <source type="video/mp4" src="${url}#t=0.1">
        </video>
      </div>
    `,
      { collapseWhitespace: true }
    );
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
