import React from 'react'

export default function education() {
  return (
    <div>
        <div className="row card col-sm-12 col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <form>
                  <h5 className="mt-3">TERTIARY EDUCATION</h5>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="inputSex">Institution Attended</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>SELECT SCHOOL</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-lg-4">
                      <label htmlFor="inputCity">Start Date</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>YYYY</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor />
                      <select id="inputState" className="form-control">
                        <option selected>MM</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor />
                      <select id="inputState" className="form-control">
                        <option selected>DD</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="inputSex">Qualification</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>SELECT QUALIFICATION</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="inputCourse">IT Duration</label>
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
                  <h5 className="mt-3">TERTIARY EDUCATION</h5>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="inputCourse">Course</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCourse"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputCity">End Date</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>YYYY</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor />
                      <select id="inputState" className="form-control">
                        <option selected>MM</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor />
                      <select id="inputState" className="form-control">
                        <option selected>DD</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="inputSex">Result Grade</label>
                      <select id="inputCourse" className="form-control">
                        <option selected>SELECT GRADE</option>
                        <option>..</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-12 bg-light">
                <div className="form-group row">
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Did you atend the convocation?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck1"
                      />
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Have you collected your certificate?
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-3">
                <button
                  type="submit"
                  className="btn bg-white text-success border border-success"
                >
                  <a
                    className="submit-link backBtn-link"
                    href="o-level"
                    style={{ textDecoration: "none" }}
                  >
                    Previous
                  </a>
                </button>
                <button
                  type="submit"
                  className="btn bg-success ml-5"
                  style={{ width: "100px" }}
                >
                  <a
                    className="submit-link"
                    href="documents"
                    style={{ textDecoration: "none" }}
                  >
                    Next
                  </a>
                </button>
              </div>
            </div>
          </div>
      
    </div>
  )
}
