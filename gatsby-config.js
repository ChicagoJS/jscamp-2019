module.exports = {
  siteMetadata: {
    title: 'JSCamp 2019',
    description: `Chicago's premier JavaScript conference September 14, 2019 featuring Node, React, Ember, Vue, Accessibility and much more.`,
    keywords: 'JavaScript, JS, Conference, Chicago JavaScript, Chicago, IL',
    siteUrl: 'https://www.chicagojscamp.org',
    author: 'ChicagoJS',
    twitter: 'chicago_js',
    city: 'Chicago, IL',
    date: 'September 14, 2019',
    ticketLink: 'https://ti.to/chicagojs/chicago-js-camp-2019',
    cfpLink: 'https://www.papercall.io/chicagojs-conf-2019',
    sponsorForm:
      'https://docs.google.com/forms/d/e/1FAIpQLScJ_YmJg5_HMD4aDg6wkFTYsXrMdPmBs47gxNRq7ke_p7ErLQ/viewform',
    sponsorPdf:
      'https://drive.google.com/file/d/1urFO5OzDpu7j8j4AICo7Gy2CmvVc0Azf/view?usp=sharing',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ChicagoJS',
        short_name: 'ChicagoJS',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        description: `Chicago's premier JavaScript conference September 14, 2019 featuring Node, React, Ember, Vue, Accessibility and much more.`,
        homepage_url: 'https://www.chicagojscamp.org',
        start_url: '/',
      },
    },
    {
      resolve: 'chicagojs-plugin-ga',
      options: {
        trackingId: 'UA-122479330-1',
        allowLinker: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '2473365316081726',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.chicagojscamp.org`,
      },
    },
    `gatsby-transformer-json`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
  ],
}
