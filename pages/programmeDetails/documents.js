import React from "react";

export default function documents() {
  return (
    <div>
      <div style={{ border: "none" }} className="row card col-sm-12 col-lg-12">
        <div className="col-6">
          <form>
            <h5 className="mt-3">O Level</h5>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="inputOtherName">
                  First Sitting Result (Scanned Copy)
                </label>
                <input
                  type="file"
                  name="myImage"
                  accept="image/x-png,image/gif,image/jpeg"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-6">
          <form>
            <h5 className="mt-3">O Level</h5>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="inputOtherName">
                  Second Sitting Result (Scanned Copy)
                </label>
                <input
                  type="file"
                  name="myImage"
                  accept="image/x-png,image/gif,image/jpeg"
                />
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="row">
          <div className="col-4">
            <form>
              <p>
                <strong>ND RESULT</strong>
              </p>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="inputOtherName">ND Certificate</label>
                  <input
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-4">
            <form>
              <div className="form-row">
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <label htmlFor="inputOtherName">ND Result</label>
                  <input
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-4">
            <form>
              <div className="form-row">
                <div className="form-group" style={{ marginTop: "40px" }}>
                  <label htmlFor="inputOtherName">
                    IT Letter Of Completion
                  </label>
                  <input
                    type="file"
                    name="myImage"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mt-5 mb-3">
            <button
              type="submit"
              className="btn bg-white text-success border border-success"
              style={{ width: "100px" }}>
              <a
                className="submit-link backBtn-link"
                href="o-level"
                style={{ textDecoration: "none" }}>
                Previous
              </a>
            </button>
            <button
              type="submit"
              className="btn bg-success ml-3"
              style={{ width: "100px" }}>
              <a
                className="submit-link"
                href="programme"
                style={{ textDecoration: "none" }}>
                Next
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
