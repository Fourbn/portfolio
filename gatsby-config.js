module.exports = {
  siteMetadata: {
    title: "Philip Turkiewicz's Developer Portfolio",
    description:
      'Philip Turkiewicz is a Toronto-based front-end web developer who specializes in creating sleek, accessible, and performant client-facing websites using the JAMstack (React, Gatsby, Contentful, Sanity, Netlify).',
    siteUrl: `https://www.codeturkie.io`
  },
  trailingSlash: 'never',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/globalStyles/mixinsVariablesFunctions.scss";`
      }
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: [`webp`, `auto`],
          quality: 90,
          breakpoints: [375, 768, 1200],
          placeholder: 'blurred'
        }
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
};
