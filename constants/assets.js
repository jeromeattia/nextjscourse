import gql from 'graphql-tag'

export const CREATE_ASSETS = gql`
mutation($protocoleId: Int!, $fileName: String!, $contentType: String, $fileSize: Int ) {
  createAsset(input: { 
    asset: { 
      protocoleId: $protocoleId
      somepdfFileName: $fileName
      somepdfContentType: $contentType
      somepdfFileSize: $fileSize
     
    } }) {
    asset {
      somepdfFileName
      somepdfFileSize
      somepdfContentType
      protocoleId
      id
    }
  }
}
`

export const ASSETS_BY_PROTOCOLE = gql`
query($protocole_id: Int!){
  allAssets(condition: {
    protocoleId: $protocole_id
  })
  {
    nodes{
      id
      protocoleId
      somepdfFileName
      somepdfFileSize
      somepdfUpdatedAt
      somepdfContentType
    }
  }
}
 `
export const DELETE_ASSET = gql`
mutation($id: Int!){
  deleteAssetById(input:{
    id: $id
  }){
    deletedAssetId
  }
}
 `
