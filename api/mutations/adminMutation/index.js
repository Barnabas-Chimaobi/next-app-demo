import { gql, useMutation } from '@apollo/client';

export const APPLICATION_SETUP = gql`
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