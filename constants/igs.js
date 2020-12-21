import { gql } from '@apollo/client'

export const CREATE_IGS = gql`
mutation(
  $nom: String!, $prenom: String, $date: Date, 
  $age: Int, $comment: String, $pression: Int, $frequence: Int, $temperature: Int,
  $pao2: Int, $admission: Int, $bicarbonate: Int, $bilirubine: Int, $diurese: Int,
  $gb: Int, $glasgow: Int, $maladie: Int, $na: Int, $potassium: Int, $uree: Int  
  ){createGravitesNew(input:{
   gravitesNew: {
    nom: $nom
    prenom: $prenom
    dateEntreeSoins: $date
    age: $age
    comment: $comment          
    pression: $pression                     
    frequence: $frequence         
    temperature: $temperature       
    pao2: $pao2              
    admission: $admission         
    bicarbonate: $bicarbonate       
    bilirubine: $bilirubine        
    diurese: $diurese           
    gb: $gb                
    glasgow: $glasgow           
    maladie: $maladie           
    na: $na                
    potassium: $potassium         
    uree: $uree                
    }
  })
  {
    gravitesNewEdge{
      node{
        id
      }
    }
  }
  }`

export const ALL_IGS = gql`
query($first: Int!, $offset: Int!){
  allGravitesNews(first: $first, offset: $offset, orderBy: ID_DESC){
    edges{
      node{
        nom
        prenom
        dateEntreeSoins
        id
        gb
        glasgow
        na
        bilirubine
        bicarbonate
        pression
        age
        admission
        pao2
        frequence
        comment
        temperature
        diurese
        maladie
        potassium
        uree
      }
    }
  }
}
`

export const ALL_IGS_SOFT = gql`
query{
  allGravitesNews( orderBy: ID_DESC, last: 30){
    edges{
      node{
        nom
        prenom
        dateEntreeSoins
        id
      }
    }
  }
}
`

export const SINGLE_IGS = gql`
query($id: Int!){
  allGravitesNews(condition:{
    id: $id
  }){
    nodes{
      id
      nom
      prenom
      dateEntreeSoins
      age
      comment
      pression
      frequence
      temperature
      pao2
      admission
      bicarbonate
      bilirubine
      diurese
      gb
      glasgow
      maladie
      na
      potassium
      uree
    }
  }
}
`

export const IGS_BY_ID = gql`
query($id: Int!){
  gravitesNewById(id: $id ){
      id
      nom
      prenom
      dateEntreeSoins
      age
      comment
      pression
      frequence
      temperature
      pao2
      admission
      bicarbonate
      bilirubine
      diurese
      gb
      glasgow
      maladie
      na
      potassium
      uree
  }
}
`

export const DELETE_IGS = gql`
mutation($id: Int!){
  deleteGravitesNewById(input: {
    id: $id
  }){
    deletedGravitesNewId
    
  }
}
`

export const UPDATE_IGS = gql`
mutation($id: Int!, $date: Date,  $age: Int, $comment: String, $pression: Int, $frequence: Int, $temperature: Int,
  $pao2: Int, $admission: Int, $bicarbonate: Int, $bilirubine: Int, $diurese: Int,
  $gb: Int, $glasgow: Int, $maladie: Int, $na: Int, $potassium: Int, $uree: Int){
  updateGravitesNewById(input: {
    id: $id
    gravitesNewPatch: {
      dateEntreeSoins: $date
      age: $age
      comment: $comment          
      pression: $pression                     
      frequence: $frequence         
      temperature: $temperature       
      pao2: $pao2              
      admission: $admission         
      bicarbonate: $bicarbonate       
      bilirubine: $bilirubine        
      diurese: $diurese           
      gb: $gb                
      glasgow: $glasgow           
      maladie: $maladie           
      na: $na                
      potassium: $potassium         
      uree: $uree                
    }
  }){
    gravitesNewEdge{
      node{
        id
      }
    }
  }
}
`
