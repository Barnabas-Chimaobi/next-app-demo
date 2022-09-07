import { gql, useMutation } from '@apollo/client';

export const DELETE_ABILITY = gql`
 mutation deleteAbility($id: int!){
     deleteAbility(id: $id){
         id
     }
 }
`
export const DELETE_DEPARTMENT = gql`
 mutation deleteDepartment($id: int!){
     deleteDepartment(id: $id){
        id
     }
 }
`
export const DELETE_DEPARTMENT_OPTION = gql`
 mutation deleteDepartmentOption($id: int!){
     deleteDepartmentOption(id: $id){
        id
     }
 }
`
export const DELETE_FACULTY = gql`
mutation deleteFaculty($id: int!){
    deleteFaculty(id: $id){
        id
    }
}
`
export const DELETE_PROGRAMME = gql`
mutation deleteProgramme($id: int!){
    deleteProgramme(id: $id){
        id
    }
}
`
export const GENERATE_APPLICATION_INVOICE = gql`
mutation generateApplicationInvoice($programmeId: int!, $departmentId: int!, $biodata: [BiodataInput!]!){
    generateApplicationInvoice(programmeId: $programmeId, departmentId: $departmentId, biodata: $biodata){
        id
    }
}
`
export const SAVE_ABILITY = gql`
mutation saveAbility($name: String!){
    saveAbility(name: $name){
        id
    }
}
`
export const SAVE_ADMISSION_CRITERIA = gql`
mutation saveAdmissionCriteria($newCriteiaDto: AddAdmissionCriteraDtoInput!){
    saveAdmissionCriteria(newCriteiaDto: $newcriteiaDto){
        id
    }
}
`
export const SAVE_APPLICATIONFORMNUMBER_SETUP = gql`
mutation saveApplicationFormNumberSetup($name: String!){
    saveApplicationFormNumberSetup(name: $name){
        id
    }
}
`
export const SAVE_DEPARTMENT = gql`
 mutation saveDepartment($name: String!, $faculty: FacultyInput!, $deptCode: String!){
    saveDepartment(name: $name, faculty: $faculty, deptCode: $deptCode){
        id
    }
}
`
export const SAVE_DEPARTMENT_OPTION = gql`
mutation saveDepartmentOption($name: String!){
    saveDepartmentOption(name: $name){
        id
    }
}
`
export const SAVE_FACULTY = gql`
mutation saveFaculty($name: String!, $description: String!){
    saveFaculty(name: $name, description: $description){
        id
    }
}
`
export const SAVE_PROGRAMME = gql`
mutation saveProgramme($name: String!, $description: String!){
    saveProgramme(name: $name, description: $description){
        id,
        name,
        description
    }
}
`
export const SAVE_SESSION = gql`
mutation saveSession($name: String!, $startDate: DateTime!, $endDate: DateTime!){
    saveSession(name: $name, startDate: $startDate, endDate: $endDate){
        id
    }
}
`
export const SUBMIT_APPLICATION_FORM = gql`
mutation submitApplicationForm($responseDetails: ApplicationFormResponseInput!, $olevelResultCombination: OlevelResultCombinationInput!, $applicantAppliedCourseId: Int!){
    submitApplicationForm(responseDetails: $responseDetails, olevelResultCombination: $olevelResultCombination, applicantAppliedCourseId: $applicantAppliedCourseId){
        id
    }
}
`
export const UPDATE_ABILITY = gql`
mutation updateAbility($id: Int!, $name: String!){
    updateAbility(id: $id, name: $name){
        id
    }
}
`
export const UPDATE_ACTIVE_FOR_ALLOCATION = gql`
mutation updateActiveForAllocation($id: Int!){
    updateActiveForAllocation(id:$id){
        id
    }
}
`
export const UPDATE_ACTIVE_FOR_APPLICATION = gql`
mutation updateActiveForApplication($id: Int!){
    updateActiveForApplication(id:$id){
        id
    }
}
`
export const UPDATE_ACTIVE_FOR_FEES = gql`
mutation updateActiveForFees($id: Int!){
    updateActiveForFees(id:$id){
        id
    }
}
`
export const UPDATE_ACTIVE_FOR_HOSTEL = gql`
mutation updateActiveForHostel($id: Int!){
    updateActiveForHostel(id:$id){
        id
    }
}
`
export const UPDATE_ACTIVE_FOR_RESULT = gql`
mutation updateActiveForResult($id: Int!){
    updateActiveForResult(id:$id){
        id
    }
}
`
export const UPDATE_ACTIVE_SESSION= gql`
mutation updateActiveSession($id: Int!){
    updateActiveSession(id:$id){
        id
    }
}
`
export const UPDATE_APPLICATION_FORM_NUMBER_SETUP = gql`
mutation updateApplicationFormNumberSetup($id: Int!, $applicationNumberPrefix: String!, $programmeId: Int!){
    updateApplicationFormNumberSetup(id: $id, applicationNumberPrefix: $applicationNumberPrefix, programmeId: $programmeId){
        id
    }
}
`
export const UPDATE_DEPARTMENT = gql`
mutation updateDepartment($id: Int!, $name: String!, $faculty: FacultyInput!){
    updateDepartment(id:$id, name: $name, faculty: $faculty){
        id
    }
}
`
export const SAVE_DYNAMIC_FORM_SETUP = gql`
mutation saveDynamicFormSetup($model: ApplicationFormDynamicSetupDtoInput!){
    saveDynamicFormSetup(model: $model){
    active, 
    createdOn
  }
}
`
