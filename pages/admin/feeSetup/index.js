import React from "react";
// import Logo from "../../../Images/ilaro-logo.jpeg";
import { AdminLayout } from "../../../Layouts/adminLayout/adminLayout";

export default function index() {
  return (
    <AdminLayout>
      <div>
        <div className=" container bg-light pb-5">
          <div className=" container bg-white pb-3">
            <div className="container mt-5 mb- ">
              <h4 className="text-dark pt-3">Dynamic Fee Setup</h4>
              <form>
                <div className="form-row row">
                  <div className="form-group col-lg-3">
                    <label>Form Type</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label>Form Session</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label>Programme</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group col-lg-3">
                    <label>Programme Level</label>
                    <select id="" className="form-control">
                      <option selected>REGULAR</option>
                      <option>..</option>
                      <option>..</option>
                    </select>
                    <div className="card mt-3">
                      <ul>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                        <li style={{ listStyle: "none" }}>REGULAR</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-right">
                <button className="bg-success text-white p-2 border-success rounded">
                  Save & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
