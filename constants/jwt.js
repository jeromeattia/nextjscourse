import gql from 'graphql-tag'

export const SIGNIN_USER_MUTATION = gql`
mutation SigninUserMutation( $email: String!, $password: String!){
  authenticate(input: {
    email: $email
    password: $password
  }) {
    jwt 
  }
}
`
