import React from 'react'

export default function programme() {
  return (
    <div>
      <div className="row card col-sm-12 col-lg-12 pb-4 pt-4">
                <div className="col-sm-6">
                    <form>
                        <h5>PROGRAMME DETAILS</h5>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="inputCourse">Programme</label>
                                <input
                                type="text"
                                className="form-control bg-light"
                                id="inputCourse"
                                placeholder="ND FULL TIME"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6">
                    <form>
                        <div className="form-row">
                        <div className="form-group" style={{ marginTop: "40px" }}>
                            <label htmlFor="inputCourse">School</label>
                            <input
                            type="text"
                            className="form-control bg-light"
                            id="inputCourse"
                            placeholder="SCHOOL OF SCIENCES"
                            />
                        </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                <div className="col-sm-12 col-12">
                    <form>
                    <div className="form-row">
                        <div className="form-group">
                        <label htmlFor="inputCourse">Course Of Study</label>
                        <input
                            type="text"
                            className="form-control bg-light"
                            id="inputCourse"
                            placeholder="COMPUTER SCIENCE"
                        />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <div className="mt-5">
                <button
                    type="submit"
                    className="btn bg-white text-success border border-success"
                >
                    <a
                    className="submit-link backBtn-link"
                    href="documents"
                    style={{ textDecoration: "none" }}
                    >
                    Previous
                    </a>
                </button>
                <button type="submit" className="btn bg-success ml-4" style={{}}>
                    <a
                    className="submit-link"
                    href="acknowledgementSlip.html"
                    style={{ textDecoration: "none" }}
                    >
                    Submit
                    </a>
                </button>
                </div>
          </div>
    </div>
  )
}
