import { gql, useQuery, useLazyQuery } from '@apollo/client';

export const GET_SLIP = gql`
 query abiityById ($id: Int!, $examNumber: String!){
     abilityById(id: $id, examNumber: $examNumber) {
        id,
        applicationNumberPrefix,
        programmeId,
     }
 }
`