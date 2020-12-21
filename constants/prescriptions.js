import gql from 'graphql-tag'

export const ALL_PRESCRIPTIONS = gql`
query($userId: Int!){
  allPrescriptions(
    first: 1,
    orderBy: ID_ASC,
    condition:{
    userId: $userId
  }){
    nodes{
      id
      userId
      texte
    }
  }
}
`

export const CREATE_PRESCRIPTION = gql`
mutation($userId: Int!){
  createPrescription(input:{
    prescription: {
      userId: $userId
    }
  }){
    prescription{
      id
      userId
      texte
    }    
  }
}
`
export const UPDATE_PRESCRIPTION = gql`
mutation($id: Int!, $texte: String){
  updatePrescriptionById(input: {
    id: $id
    prescriptionPatch: {
      texte: $texte
    }
  }){
    prescription{
      id
    }
  }
}
`
