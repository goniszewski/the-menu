const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    // https://tailwindcss.com/course/optimizing-for-production/
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.js", "./src/App.js", "./src/index.js"],
        defaultExtractor: (content) => content.match(/[A-Za-z9-0-_:/]+/g) || [],
      }),
  ],
};
