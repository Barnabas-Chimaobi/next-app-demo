import React from "react";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../Application/progressCard";

export default function index() {
  return (
    <Frontlayout>
      <div>
        <div className="container d-lg-flex ">
          <div className="col-lg-8 col-sm-12">
            <div className="d-block container mt-3 mb-3 card pl-5 pt-5 pb-5 pr-5">
              <h2>Admission</h2>
              <p className="text-dark" style={{ fontSize: "24px" }}>
                Current Status:{" "}
                <strong className="text-success" style={{ fontSize: "24px" }}>
                  Completed Student Information Form
                </strong>
              </p>
              <hr></hr>
              <div className="row container ">
                <div className="col-lg-4">
                  <div>
                    <label>Full Name</label>
                    <h5>BANKOLE DAMILOLA ARIKE</h5>
                  </div>
                  <div>
                    <label>Course Of Study</label>
                    <h5>SCIENCE LABORATORY TECHNOLOGY</h5>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <label>Application Form Number</label>
                    <h5>FPI/PND/2021/000009528</h5>
                  </div>
                  <div>
                    <label>Course Option</label>
                    <h5>---</h5>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <label>Programme</label>
                    <h5>ND Part Time</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-block container mt-3 mb-3 card pl-5 pt-5 pb-5 pr-5">
              <h2 className="text-success">Congratulations!</h2>
              <p style={{ fontSize: "24px" }}>
                You have been given a Provisional Admission into Federal
                Polytechnic, Ilaro.
              </p>
              <div
                style={{ backgroundColor: "#E0FDED" }}
                className="container pt-5 pl-5 pr-5 pb-5">
                {/* <FontAwesomeIcon icon="fa-solid fa-circle-info" /> */}
                <p>
                  This marks the first step of your admission process. Click on
                  the Next button below, to proceed to the next step.
                </p>
                <p>
                  Application Form Number:
                  <strong style={{ fontSize: "16px" }}>
                    FPI/PND/2021/000009528
                  </strong>
                </p>
              </div>
              <div className="mt-5 text-right" style={{ gap: "10" }}>
                <button
                  className="btn text-success border-success"
                  style={{ width: "200px" }}>
                  Print Admission Slip
                </button>
                <button
                  className="btn text-white btn-success"
                  style={{ width: "120px" }}>
                  Next Step
                </button>
              </div>
            </div>
          </div>
          <ProgressCard />
        </div>
      </div>
    </Frontlayout>
  );
}
