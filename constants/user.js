import gql from 'graphql-tag'

export const USER_BY_EMAIL = gql`
  query ($email: String!){
    allUsers(condition:
      {email: $email}
    ){ 
      edges{
        node {
          id
          name
          email
          salt
          cryptedPassword
          role
        }
      }
    }
  }`

export const USER_BY_ID = gql`
  query ($id: Int!){
      userById(id: $id){
        id
        email
        name
        mailing
        role
    }
    }
`

export const USERS_GET_USER_BY_EMAIL = gql`
 query ($email: String!){
      allUsers(condition:
       { email: $email}
      ) {
        edges{node
          {
          email
          id
          salt
          cryptedPassword
          role
        }}
      }
    }`

export const USER_GET_ID_BY_NAME = gql`
mutation ($username: String!){
    usersGetId(input: {
      name: $name
    }) {
      clientMutationId
      integer 
    }
  }`

export const USER_CREATE = gql`
  mutation ($email: String!, $cryptedPassword: String!, $salt: String!, $name: String!, $role: String){
    createUser(input:{
      user:{
        email: $email
        cryptedPassword: $cryptedPassword
        salt: $salt
        role: $role
        name: $name
      }
    }){
      userEdge{
        node{
          id
          email
        }
      }
    }
  }
  `

export const ALL_USERS = gql`
  query{
    allUsers(orderBy: NAME_ASC){
      edges{
        node{
          id
          name
          role
          email
          mailing
          }
        }
      }
  }`

export const DELETE_USER = gql`
  mutation ($id: Int!){
    deleteUserById(
      input: {
        id: $id
      }
    ) {
      deletedUserId
      user {
        name
      }
    }
  }
  `
// TODO: changer le role doit etre possible
// separate function for updating password
export const UPDATE_USER = gql`
  mutation ($id: Int!, $name: String, $mailing: Boolean, $role: String, $email: String){
    updateUserById(input: {
      id: $id
      userPatch:{
        name: $name
        mailing: $mailing
        role: $role
        email: $email
    }
    }){
      user{
        id
        name
      }
    }
  }
  `
// a remplacement for USER_CREATE with encryption done in pg
// warning, create a prescription too ...
export const USER_REGISTER = gql`
mutation($email: String!, 
  $password: String!, $role: String!, $name: String){
  register(input: {
    email: $email
    password: $password
    role: $role
    name: $name

  }){
    integer
  }
}
`
export const USER_MAILING_LIST = gql`
query{
  allUsers(condition: {
    mailing: true
  }){
    nodes{
      id
      email
    }
  }
}
`
export const UPDATE_USER_PASSWORD = gql`
mutation($password: String!, $userid: Int! ){
  updateUserPassword(input:{
    password: $password,
    userid: $userid
  })
    {
string
    }
}
`
