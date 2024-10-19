import 'dotenv/config'

module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: process.env.GRAPHQL_URL,
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js'],
  },
}
