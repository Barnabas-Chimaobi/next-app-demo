import React from "react";

export default function personDetails() {
  return (
    <div>
      <div
        style={{ border: "none" }}
        className="card col-lg-12 col-sm-12  pb-4 pt-4">
        <form>
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
                placeholder="09098897890"
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
              <input type="text" className="form-control" id="inputHometown" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <label htmlFor="inputState">Local Government Area</label>
              <input type="text" className="form-control" id="inputState" />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="inputState">Date Of Birth</label>
              <input type="text" className="form-control" id="inputState" />
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
              <input type="text" className="form-control" id="inputOtherName" />
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
              <input type="text" className="form-control" id="inputOtherName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <label htmlFor="inputOtherName">
                Extra Curricular Activities e.g Sports
              </label>
              <input type="text" className="form-control" id="inputOtherName" />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="inputOtherName">
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
              <input type="text" className="form-control" id="inputSurname" />
            </div>
            <div className="form-group col-lg-6">
              <label htmlFor="inputCourse">Address</label>
              <input type="text" className="form-control" id="inputCourse" />
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
              <input type="text" className="form-control" id="inputOtherName" />
            </div>
          </div>
          {/* Buttons */}
          <button type="submit" className="btn bg-success">
            <a className="submit-link" href="o-level">
              Next
            </a>
          </button>
        </form>
      </div>
    </div>
  );
}
