import React from "react";
import FirstModal from "../../firstModal";
import SAVEPROGRAMMEFORM from "../../../pages/admin/saveProgramme";
export const SaveProgramme = (props) => {
  return (
    <main>
      <FirstModal show={props.show} close={props.close}>
        <SAVEPROGRAMMEFORM onclose={props.onclose} />
      </FirstModal>
    </main>
  );
};
