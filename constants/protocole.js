import gql from 'graphql-tag'

export const SEARCH_PROTOCOLES = gql`
query($qs: String, $first: Int!, $offset: Int!) {
  searchProtocoles(search: $qs, offset: $offset, first: $first  ) {
    totalCount
    edges {
      node {
        id
        intervention
        commentaires
        specialiteId
        auteur
        createdAt
        commentsCount
      }
    }
  }
}
`
export const ALL_PROTOCOLES = gql`
query{
  allProtocoles(orderBy: CREATED_AT_DESC)
  {
  edges{
    node{
      id
      intervention
      commentaires
      specialiteId
      auteur
      createdAt
      commentsCount
      }
    }
  }
}
`

export const PROTOCOLES_COUNT = gql`
query{
  allProtocoles {
    totalCount
  }
}
`

export const PROTOCOLE_BY_ID_QUERY = gql`
query($id: Int!){
  protocoleById(id: $id){
    id
    intervention
    commentaires
    auteur
    createdAt
    specialiteBySpecialiteId{
      nom
    }
    assetsByProtocoleId{
      totalCount
      nodes{
        id
        somepdfFileName
        somepdfFileSize
        somepdfContentType
      }
    }
  }
}
`
export const CREATE_PROTOCOLE = gql`
mutation($intervention: String!, $commentaires: String, $auteur: String, $createdAt: Datetime!) {
  createProtocole(input: { 
    protocole: { 
      intervention: $intervention
      commentaires: $commentaires
      createdAt: $createdAt
      auteur: $auteur
    } }) {
    protocole {
      id
      intervention
      auteur
    }
  }
}
`
export const UPDATE_PROTOCOLE = gql`
mutation($id: Int!, $intervention: String, $commentaires: String, $auteur: String
  $updatedAt: Datetime!) {
    updateProtocoleById(input: { 
      id: $id
      protocolePatch: { 
        updatedAt: $updatedAt
        intervention: $intervention
        commentaires: $commentaires
        auteur: $auteur
      } }) {
      protocole {
        intervention
        commentaires
        auteur
        id
      }
    }
  }
  `
export const DELETE_PROTOCOLE = gql`
  mutation($id: Int!){
    deleteProtocoleById(input: {
      id: $id
    }){
      deletedProtocoleId
    }
  }
`
