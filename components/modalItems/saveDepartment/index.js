import React from "react";
import FirstModal from "../../firstModal";
import AddDepartmentForm from "../../../pages/admin/addDepartment";
import SaveDepartmentForm from "../../../pages/admin/saveDepartment";
export const SaveDepartment = (props) => {
  return (
    <main>
      <FirstModal show={props.show} close={props.close}>
        <SaveDepartmentForm />
      </FirstModal>
    </main>
  );
};
