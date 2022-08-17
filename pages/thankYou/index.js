import React from "react";
import ProgressCard from "../Application/progressCard";

export default function index() {
  return (
    <div>
      <div className="d-block d-lg-flex container mt-3 mb-3">
        <h2 className>Thank You!</h2>
      </div>
      <div className="container d-block d-lg-flex">
            <div className="card col-lg-8 col-sm-12 ">
                <div className="card-body">
                        <div className="mt-5">
                            <p>
                                Your Application is now complete. <br />
                                The date and time of the screening will be communicated to you
                                via email or text message soon. <br />
                            </p>
                            <p>
                                If you have any complaints, suggestions or issues, please
                                contact our support team through any of the channels below.{" "}
                                <br />
                                Thank You.
                            </p>
                        </div>
                    <div className="mt-3">
                    <p>Support Phone Lines</p>
                    <div className="d-flex">
                        <strong>07088391544</strong>
                        <strong className="ml-3">09059424123</strong>
                        <strong className="ml-3">09053630262</strong>
                    </div>
                    </div>
                    <div className="mt-3">
                    <p>Support Email</p>
                    <strong>support@lloydant.com</strong>
                    </div>
                </div>
                {/* buttons */}
                <div className="mt-4 mb-3">
                    <button type="submit" className="btn bg-success">
                    <a
                        className="submit-link"
                        href
                        style={{ textDecoration: "none" }}
                    >
                        Re-Print Slip
                    </a>
                    </button>
                    <button
                    type="submit"
                    className="btn bg-white text-success border border-success ml-5"
                    style={{}}
                    >
                    <a
                        className="submit-link text-success"
                        href="index.html"
                        style={{ textDecoration: "none" }}
                    >
                        New Application
                    </a>
                    </button>
                </div>
            </div>
            <ProgressCard />
      </div>
    </div>
  );
}
