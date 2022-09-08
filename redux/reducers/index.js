import userSlice, { userDetails} from './authReducer';
import formSlice, {fieldName, fieldType} from './formReducers'
import schoolSetupSlice, {faculty, department, session, programme} from './schoolSetup'
// import networkSlice, {checkNetwork} from './network'

export {
  userSlice,
  userDetails,
  formSlice,
   faculty,
   session,
   department,
   programme,
  schoolSetupSlice
  // networkSlice,
  // checkNetwork,
  // semester,
  // session
};