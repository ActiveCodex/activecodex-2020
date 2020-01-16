module.exports = {
    siteMetadata: {
        title: 'ActiveCodex',
        titleTemplate: '%s • ActiveCodex',
        description: 'ActiveCodex is a tiny space in the digital world where Mohammed Abbas, a Front-End Software Engineer, can showcase his work and skills.',
        url: 'https://www.activecodex.com',
        siteUrl: 'https://www.activecodex.com',
        image: '/images/snape.jpg',
        twitterUsername: '@ActiveCodex',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: 'https://www.activecodex.com',
                policy: [{ userAgent: '*', disallow: '/' }]
            },
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/content/`,
            },
        },
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
        `gatsby-plugin-react-helmet`
    ],
}