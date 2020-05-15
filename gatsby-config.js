module.exports = {
    siteMetadata: {
        title: `Ecommerce site`,
        description: `An Ecommerce site with Contentful for cms and Stripe for payments.`,
        author: {
            name: 'Ivan Rey C. V.',
            email: 'ivan.rey.c.v@gmail.com',
        },
    },
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                pure: true,
            },
        },
    ],
}
