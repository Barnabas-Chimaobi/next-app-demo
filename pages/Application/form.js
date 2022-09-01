import React from "react";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../Application/progressCard";

export default function form() {
  return (
    <Frontlayout>
      <div>
        <div className="d-block container mt-3 mb-3">
          <div className="d-block container">
            <h2 className>Application Form</h2>
            <p>HND FULL TIME</p>
          </div>
        </div>

        <div className="container d-block d-lg-flex">
          <div className="col-lg-8 col-sm-12">
            <div className="">
              <div className="">
                <form className="form-style ">
                  <h5>
                    <strong>BIO DATA</strong>
                  </h5>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputSurname">Surname</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="inputSurname"
                        placeholder="ADELEKE"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputCourse">First Name</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="inputCourse"
                        placeholder="DEBORAH"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputOtherName">Other Name</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="inputOtherName"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputSex">Sex</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>SELECT SEX</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputPhone">Mobile Phone</label>
                      <input
                        type="number"
                        className="form-control bg-light"
                        id="inputPhone"
                        placeholder={"09098897890"}
                      />
                    </div>
                    <div className="form-group col_lg-6">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control bg-light"
                        id="inputEmail"
                        placeholder="adelekeifeoluwa@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputState">State Of Origin</label>
                      <input
                        type="text"
                        className="form-control bg-light"
                        id="inputState"
                        placeholder="EKITI"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputHometown">Hometown</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputHometown"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputState">Local Government Area</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputState"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputState">Date Of Birth</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputState"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputSex">Religion</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>Select Religion</option>
                        <option>Chritianity</option>
                        <option>Muslim</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputOtherName">Permanent Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputOtherName"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputSex">Disability</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>None</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputOtherName">If Others, specify</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputOtherName"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputOtherName">
                        Extra Curricular Activities e.g Sports
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputOtherName"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label
                        htmlFor="inputOtherName"
                        style={{ fontSize: "14px" }}>
                        Upload Passport (click below to select a passport photo)
                      </label>
                      <input
                        type="file"
                        name="myImage"
                        accept="image/x-png,image/gif,image/jpeg"
                      />
                    </div>
                  </div>
                  <h5>
                    <strong>NEXT OF KIN</strong>
                  </h5>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputSurname">Next of Kin Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputSurname"
                      />
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputCourse">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputSex">Relationship</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>Select Relationship</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-lg-6">
                      <label htmlFor="inputOtherName">Mobile Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputOtherName"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn bg-success">
                    <a className="submit-link" href="o-level">
                      Next
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-sm-12"> */}
          <ProgressCard />

          {/* </div> */}
        </div>
      </div>
    </Frontlayout>
  );
}
