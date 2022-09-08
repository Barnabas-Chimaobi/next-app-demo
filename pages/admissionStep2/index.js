import React from "react";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../Application/progressCard";

export default function index() {
  return (
    <Frontlayout>
      <div>
        <div className="container d-lg-flex">
          <div className="col-lg-8 col-sm-12">
            <div className="d-block container mt-2 mb-3 card pl-5 pt-5 pb-5 pr-5">
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
              <div className="row">
                <p style={{ fontSize: "20px" }} className="pb-3">
                  <strong>Verify / Modify O’Level Result</strong>
                </p>
                <div className="col-lg-6">
                  <form>
                    <h4>FIRST SITTING</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputSex">Type</label>
                        <select id="inputCourse" className="form-control">
                          <option selected>SELECT EXAM TYPE</option>
                          <option>..</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputCourse">Exam No.</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCourse"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputSex">Exam Year</label>
                        <select id="inputCourse" className="form-control">
                          <option selected>SELECT YEAR</option>
                          <option>..</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputCourse">Scratch Card Pin</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCourse"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form>
                    <h4>SECOND SITTING</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputSex">Type</label>
                        <select id="inputCourse" className="form-control">
                          <option selected>SELECT EXAM TYPE</option>
                          <option>..</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputCourse">Exam No.</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputCourse"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="inputSex">Exam Year</label>
                        <select id="inputCourse" className="form-control">
                          <option selected>SELECT YEAR</option>
                          <option>..</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row pt-4 pb-4">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6 bg-light rounded pl-5 pt-5 pb-5">
                      <div className="row">
                        <div className="col-lg-6">
                          <form className>
                            <p>
                              <strong>Subject</strong>
                            </p>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-6">
                          <form>
                            <p>
                              <strong>Grade</strong>
                            </p>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 bg-light rounded pl-5 pt-5 pb-5">
                      <div className="row">
                        <div className="col-lg-6">
                          <form className>
                            <p>
                              <strong>Subject</strong>
                            </p>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-6">
                          <form>
                            <p>
                              <strong>Grade</strong>
                            </p>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <select
                                  id="inputCourse"
                                  className="form-control">
                                  <option selected>SELECT</option>
                                  <option>..</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 text-right" style={{ gap: "10" }}>
                      <button
                        className="btn text-success border-success"
                        style={{ width: "120px" }}>
                        Submit
                      </button>
                      <button
                        className="btn text-white btn-success"
                        style={{ width: "120px" }}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProgressCard />
        </div>
      </div>
    </Frontlayout>
  );
}
