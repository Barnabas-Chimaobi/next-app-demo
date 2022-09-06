import React from "react";
import FirstModal from "../../firstModal";
import SaveSessionForm from "../../../pages/admin/saveSession";
export const SaveSession = (props) => {
  return (
    <main>
      <FirstModal show={props.show} close={props.close}>
        <SaveSessionForm />
      </FirstModal>
    </main>
  );
};
