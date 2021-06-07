module.exports = {
  base: "/test2/",
  /* dest: "public", */
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    sidebar: "auto",
  },
  plugins: {
    "@vuepress/medium-zoom": {
      selector: "img",
    },
  },
};
