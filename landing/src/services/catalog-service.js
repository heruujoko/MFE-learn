import axios from 'axios';

export const queryCatalogs = () => axios({
  // TODO: use proper gql client
  url: 'https://api.graphqlplaceholder.com/',
  method: 'post',
  data: {
    query: `
      query FetchPosts {
        posts {
          data {
            id
            title
            body
            author {
              name
            }
          }
        }
      }
    `
  }
});