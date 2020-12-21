import gql from 'graphql-tag'

export const ALL_ANNUAIRES = gql`
query {
  allAnnuaires(orderBy: NOM_ASC){
    edges{
      node{
        id
        nom
        numero
      }
    }
  }
}
`

export const DELETE_ANNUAIRE = gql`
mutation ($id: Int!){
  deleteAnnuaireById(
    input: {
      id: $id
    }
  ) {
    deletedAnnuaireId
    annuaire {
      id
    }
  }
}
`
export const CREATE_ANNUAIRE = gql`
mutation($nom: String!, $numero: String, $categorie: String,
$createdAt: Datetime!,$updatedAt: Datetime! ) {
  createAnnuaire(
    input: { annuaire: {
      nom: $nom,
      numero: $numero, 
      categorie: $categorie
      createdAt: $createdAt
      updatedAt: $updatedAt
      }
    }
  ) {
    annuaire {
      id
      nom
      numero
      categorie
    }
  }
}
`
