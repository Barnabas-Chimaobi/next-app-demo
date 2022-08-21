import { gql, useMutation } from '@apollo/client';

export const STAFF_LOGIN = gql`
 mutation staffLogin($username: String!, $password: String!){
     staffLogin(username: $username, password: $password){
        userId,
        username,
        role,
        authToken,
        fullName,
        passportUrl
     }
 }
`