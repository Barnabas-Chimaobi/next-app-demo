import React from "react";
import FirstModal from "../../firstModal";
import AddDepartmentForm from "../../../pages/admin/addDepartment";
import SaveFacultyForm from "../../../pages/admin/saveFaculty";
export const SaveFaculty = (props) => {
  return (
    <main>
      <FirstModal show={props.show} close={props.close}>
        <SaveFacultyForm onclose={props.onclose} />
      </FirstModal>
    </main>
  );
};
