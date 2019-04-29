const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Digett`,
    description: `Digett's Gatsby Theme`,
    siteUrl: `https://www.digett.com`,
    author: `@alexanderfountain`,
    logo: `/assets/logo_no_comp.png`,
    menuLinks:[
      {
         name:'Link 1',
         link:'/link-1'
      },
      {
         name:'Link 2',
         link:'/link-2'
      },
      {
         name:'Link 3',
         link:'/link-3'
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages"),
      },
    },  
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        // replace with the name of your theme
        modules: ["gatsby-theme-digett"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-v2-plugin-page-transitions`,
  ],
}
