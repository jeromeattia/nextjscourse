import { gql } from '@apollo/client'

export const ALL_ACTES = gql`
query  {
  allActes(orderBy: ACTE_ASC){
    edges{
      node{
        id
        acte
        anesthesie
        prixSs
        prixReco
        specialite
        descript
      }
    }
  }
}
`

export const DELETE_ACTE = gql`
mutation ($id: Int!){
  deleteActeById(
    input: {
      id: $id
    }
  ) {
    deletedActeId
    acte {
      id
    }
  }
}
`

export const UPDATE_ACTE = gql`
  mutation ($id: Int!,$acte: String, $anesthesie: String,
$prixSs:  BigFloat , $prixReco:  BigFloat, $descript: String, $updatedAt: Datetime!){
    updateActeById(input: {
      id: $id
      actePatch:{
        acte: $acte
        anesthesie: $anesthesie
        prixSs: $prixSs
        prixReco: $prixReco
        descript: $descript
        updatedAt: $updatedAt
    }
    }){
      acte {
        id
      }
    }
  }
  `

export const CREATE_ACTE = gql`
mutation($specialite: SpecType!, $acte: String, $anesthesie: String,
$prixSs:  BigFloat , $prixReco:  BigFloat, $descript: String,
$createdAt: Datetime!,$updatedAt: Datetime! ) {
  createActe(
    input: { acte: {
      specialite: $specialite,
      acte: $acte, 
      anesthesie: $anesthesie,
      prixSs: $prixSs,
      prixReco: $prixReco,
      descript: $descript,
      createdAt: $createdAt
      updatedAt: $updatedAt
      }
    }
  ) {
    acte {
      id
      acte
      anesthesie
      prixSs
      prixReco
      specialite
      descript
    }
  }
}
`
export const ACTE_BY_ID = gql`
query($id: Int!)
  {
  acteById(id: $id){
    id
    acte
    anesthesie
    prixSs
    prixReco
    specialite
    descript
  }
}
`
export const ACTE_BY_ACTE = gql`
query($acte: String!)
{
  acteByActe(acte: $acte){
    id
    acte
  }
}
`
