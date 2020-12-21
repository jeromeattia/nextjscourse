import gql from 'graphql-tag'

export const ALL_SCORES = gql`
query {
  allScores {
    nodes {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
}
`
export const SCORE_BY_ID = gql`
query($id: Int!) {
  scoreById(id: $id) {
    title
    body
    createdAt
    updatedAt
    id
  }
}
`

export const UPDATE_SCORE_BY_ID = gql`
mutation($id: Int!, $title: String, $body: String){
  updateScoreById(input: {
    id: $id
    scorePatch: {
      title: $title 
      body: $body
    }
  }){
    scoreEdge{
      node{
        id
      }
    }
  }
}
`
export const CREATE_SCORE = gql`
mutation($title: String!, $body: String!, $createdAt: Datetime!,
$updatedAt: Datetime!) {
  createScore(input: { 
    score: { 
      createdAt: $createdAt
      updatedAt: $updatedAt
      title: $title
      body: $body
    } }) {
    score {
      title
      body
      id
    }
  }
}
`
