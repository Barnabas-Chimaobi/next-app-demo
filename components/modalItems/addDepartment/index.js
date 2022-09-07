import React from "react";
import FirstModal from "../../firstModal";
import AddDepartmentForm from "../../../pages/admin/addDepartment";
export const AddDepartMent = (props) => {
  return (
    <main>
      <FirstModal show={props.show} close={props.close}>
        <AddDepartmentForm />
      </FirstModal>
    </main>
  );
};
