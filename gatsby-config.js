require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Muhasim_asari | Portfolio Website`,
    description: `Passionates in frontend developer and UI/UX Designer since I was in college. Always looking forward to improve myself and learning something new to improving my skill. I loved to learning by doing and capable to work in team well. I also love to spread happiness. `,
    author: `Muhammad Hasim Asari <muhasim2asari@gmail.com>`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.ADOBE_FONT_SECRET_ID
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Poppins:300,400,500,600,700`
    //     ], display: 'swap'
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `muhasim-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
