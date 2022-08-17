import React from "react";

export default function index() {
  return (
    <div>
      <center>
        <div className="container row justify-content-center mt-5 pb-5">
          <div className="col-lg-4 col-sm-12 card border-success pt-5 pb-5 pl-4 pr-4">
                <div className="mt-3">
                    <h2 className="mb-3 text-success font-weight-bold">Welcome</h2>
                    <p className="text-success" >Please provide your username and password</p>
                </div>
                <div className="pt-3">
                    <div className="mt-4">
                    <input
                        type="text"
                        className="form-control bg-light"
                        id="inputRRR"
                        placeholder="Username"
                        //   style={{ width: "40px" }}
                    />
                    </div>
                    <div className="mt-3">
                    <input
                        type="text"
                        className="form-control bg-light"
                        id="inputRRR"
                        placeholder="Password"
                        //   style={{ width: "400px" }}
                    />
                    </div>
                    {/*  submit button */}
                <div className="mt-5 mb-3">
                <button
                    type="submit"
                    className="btn darkGreen btn-block"
                    style={{ width: "" }}
                >
                    <a
                    className="submit-link"
                    style={{ textDecoration: "none" }}
                    href="applicationForm.html"
                    >
                    Login
                    </a>
                </button>
                </div>
                </div>
                
          </div>
        </div>
      </center>
    </div>
  );
}
