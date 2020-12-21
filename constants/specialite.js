import gql from 'graphql-tag'

export const SPECIALITE_BY_ID = gql`
query($id: Int!){
    specialiteById(id: $id){
      id
      nom
    }
  }
  `
