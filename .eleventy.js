const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");
const outdent = require("outdent");

const isProduction = process.env.NODE_ENV === "production";

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

const stringifyAttributes = (attributeMap) => {
  return Object.entries(attributeMap)
    .map(([attribute, value]) => {
      if (typeof value === "undefined") return "";
      return `${attribute}="${value}"`;
    })
    .join(" ");
};

const imageShortcode = async (
  src,
  alt,
  className = undefined,
  widths = [400, 800, 1280],
  formats = ["webp", "jpeg"],
  sizes = "100vw"
) => {
  console.log("Optimizing Image: ", src);
  const imageMetadata = await Image(src, {
    widths: [...widths, null],
    formats: [...formats, null],
    outputDir: "_site/assets/images",
    urlPath: "/assets/images",
  });

  const sourceHtmlString = Object.values(imageMetadata)
    .map((images) => {
      const { sourceType } = images[0];

      const sourceAttributes = stringifyAttributes({
        type: sourceType,
        srcset: images.map((image) => image.srcset).join(", "),
        sizes,
      });

      return `<source ${sourceAttributes}>`;
    })
    .join("\n");

  const getLargestImage = (format) => {
    const images = imageMetadata[format];
    return images[images.length - 1];
  };

  const largestUnoptimizedImg = getLargestImage(formats[0]);
  const imgAttributes = stringifyAttributes({
    src: largestUnoptimizedImg.url,
    width: largestUnoptimizedImg.width,
    height: largestUnoptimizedImg.height,
    alt,
    loading: "lazy",
    decoding: "async",
  });
  const imgHtmlString = `<img ${imgAttributes}>`;

  const pictureAttributes = stringifyAttributes({
    class: className,
  });
  const picture = `<picture ${pictureAttributes}>
    ${sourceHtmlString}
    ${imgHtmlString}
  </picture>`;

  return outdent`${picture}`;
};

function videoShortcode(url, alt) {
  return htmlmin.minify(
    `
      <div class="video-container">
        <video alt="${alt}" preload="metadata" class="portfolioVideo" width="1280" height="720"
          controls="controls"  onclick="this.play()">
            <source type="video/mp4" src="${url}#t=0.1">
        </video>
      </div>
    `,
    { collapseWhitespace: true }
  );
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("./assets/**/*.mp4");
  eleventyConfig.addPassthroughCopy("./assets/favicon.ico");
  eleventyConfig.addPassthroughCopy("./assets/*.svg");
  eleventyConfig.addPassthroughCopy("./assets/**/*thumbnail.jpg");
  eleventyConfig.addPassthroughCopy("./assets/william-hammond-resume.pdf");
  eleventyConfig.addPassthroughCopy("./src/js");

  eleventyConfig.addWatchTarget("./src/css/tailwind.config.js");
  eleventyConfig.addWatchTarget("./src/css/");

  console.log("ENV" + process.env.ENVIRONMENT);
  if (isProduction) {
    eleventyConfig.addTransform("htmlmin", htmlMinify);
  }

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addShortcode("addVideo", videoShortcode);

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
