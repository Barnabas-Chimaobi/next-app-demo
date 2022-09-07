import React from "react";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../Application/progressCard";

export default function index() {
  return (
    <div>
      <Frontlayout>
        <div
          // <<<<<<< HEAD
          className="d-block d-lg-flex container mt-3 mb-3"
          style={{ fontFamily: "Montserrat" }}>
        </div>
        <div className="container d-block d-lg-flex">
          <div
            className="card col-lg-8 col-sm-12"
            style={{ paddingBottom: "40px" }}>
            <div className="">
              <div className="d-flex justify-content-center">
                <img src="ilaro-logo.jpeg" className="ml-5" />
              </div>
              <div className="d-flex justify-content-center">
                <h4>The Federal Polytechnic, Ilaro</h4>
              </div>
            </div>
            {/* Address */}
            <div className=" d-flex col-sm-12 justify-content-between mt-3">
              <div className="">
                <address>
                  <strong>Applicant:</strong> Chukwuebuka Prince Udoka
                  <br />
                  <strong>Email:</strong> okabs50@gmail.com
                  <br />
                  <strong>Phone:</strong> 090986757
                  <br />
                  <strong>Department:</strong> Computer Science
                  <br />
                  <strong>Programme:</strong> ND Full Time
                </address>
              </div>
              <div className="">
                <address>
                  <strong>To:</strong> The Federal Polytechnic, Ilaro
                  <br />
                  P.M.B 50, Ilaro, Ogun State.
                  <br />
                  <strong>RRR No:</strong> 134567890
                  <br />
                  <strong>Invoice No:</strong> FPI213546758
                  <br />
                  <strong>Date:</strong> October 11, 2021
                </address>
              </div>
            </div>
            {/* Table */}
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">ND Full Time Application Form</th>
                    <td>1</td>
                    <td>5,000</td>
                    <td>5,000</td>
                  </tr>
                  <tr>
                    <th scope="row" />
                    <td> </td>
                    <td> </td>
                    <td />
                  </tr>
                  <tr>
                    <th scope="row" />
                    <td colSpan={2} />
                    <td>Total: 5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Buttons */}
            <div className="mt-5">
              <button type="submit" className="btn darkGreen mr-3">
                <a
                  className="submit-link"
                  style={{ textDecoration: "none" }}
                  href="/Application">
                  Print Slip
                </a>
              </button>
              <button
                type="submit"
                className="btn bg-white darkGreenc border border-success "
                style={{ width: 100 }}>
                <a
                  className="submit-link backBtn-link"
                  style={{ textDecoration: "none" }}
                  href="">
                  Back
                </a>
              </button>
            </div>
          </div>
          {/* New student app */}

          <ProgressCard />
        </div>
      </Frontlayout>
    </div>
  );
}
