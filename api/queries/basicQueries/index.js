import { gql, useQuery, useLazyQuery } from '@apollo/client';

export const GET_ALL_DEPARTMENT = gql`
 query allDepartment {
     allDepartment {
        active,
        code,
        faculty {
            id,
            name
        },
        name,
        id,
        slug
     }
 }
`
export const GET_ALL_FACULTY = gql`
 query allFaculty {
     allFaculty {
      id,
      name,
      description,
      slug
     }
 }
`
export const GET_ALL_SESSION = gql`
 query allSession {
     allSession {
        id,
         name,
         slug,
         startDate,
         endDate
     }
 }
`
export const GET_ALL_PROGRAMME = gql`
 query allProgramme {
     allProgramme {
        id,
        description,
        name,
        shortName,
        slug
     }
 }
`