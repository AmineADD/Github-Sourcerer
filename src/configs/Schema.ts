
import {
  gql
} from "@apollo/client";

export const Schema = gql`
query {
    viewer {
        id
        login
        name
        location
        avatarUrl(size: 150)
        bio
        following {
            totalCount
        }
        followers {
            totalCount
        } 
        repositories(first: 100) {
          totalCount
          edges {
          node { 
          name
          pushedAt 
          refs(first: 100, refPrefix: "refs/heads/") {
              edges{
                node{
                  name
                  target{
                    ... on Commit{
                      id
                      history{
                        totalCount
                      }
                    }
                  }
                }
              }
            }
              languages(first: 100) {
              totalCount
              totalSize
              nodes {
                  name
                  color
                
              }
              totalCount
              }
              primaryLanguage {
                name
                color
                id
                
              }
          }
          }
      }
        websiteUrl
    }
}
`