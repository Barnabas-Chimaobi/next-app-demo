import React from "react";
import ProgressCard from "../Application/progressCard";
import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { GET_SLIP } from "../../api/queries/acknowledment";

export default function index() {
  const {
    loading: slipLoading,
    error: slipError,
    data: slipData,
  } = useQuery(GET_SLIP, { variables: {} });
  const {
    loading: nameLoading,
    error: nameError,
    data: nameData,
  } = useQuery(GET_NAME);
  const [getName, { loading: nameLoading, error: nameError, data: nameData }] =
    useLazyQuery(GET_NAME);

  console.log(slipData, "fyguhijkhgfdghjkl");

  return (
    <>
      <div className="mt-3 container">
        <h2>Acknowledgement Slip</h2>
      </div>
      <div className="container d-block d-lg-flex ">
        <div className="card col-lg-8 col-sm-12">
          <div className="col-12 d-flex justify-content-center">
            <img
              className="ilaro-logo"
              src="ilaro-logo.jpeg"
              alt="ilaro-logo"
            />
          </div>
          <div className="col-12  d-flex justify-content-center">
            <h3>
              <strong>The Federal Polytechnic, Ilaro</strong>
            </h3>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <p>2020/2021 FPI SCREENING FORM ACKNOWLEDGEMENT SLIP</p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3">
              <img
                className="ilaro-logo"
                src="ilaro-logo.jpeg"
                alt="ilaro-logo"
              />
            </div>
            <div className="col-3">
              <p>Application Form Number</p>
              <p>
                <strong>ABCD1234560</strong>
              </p>
            </div>
            <div className="col-3">
              <p>Exam Number</p>
              <p>
                <strong>0123456789</strong>
              </p>
            </div>
            <div className="col-3">
              <barcode type="qr" mode="H"></barcode>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <p>Next Of Kin</p>
                  <p>
                    <strong>IFEOLUWA HELEN</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>Contact Address</p>
                  <p>
                    <strong>1A ILUPEJU STREET, YABA, LAGOS</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <p>Relationship</p>
                  <p>
                    <strong>SISTER</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>Phone</p>
                  <p>
                    <strong>09098878909</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <p>Full Name</p>
                  <p>
                    <strong>IFEOLUWA DEBORAH ADELEKE</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>Phone</p>
                  <p>
                    <strong>09098890987</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>State Of Origin</p>
                  <p>
                    <strong>EKITI</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>Programme</p>
                  <p>
                    <strong>ND FULL TIME</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <p>Email</p>
                  <p>
                    <strong>ifeoluwadeborah@gmail.com</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>LGA</p>
                  <p>
                    <strong>ADO-EKITI</strong>
                  </p>
                </div>
                <div className="col-12">
                  <p>Department</p>
                  <p>
                    <strong>COMPUTER SCIENCE</strong>
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <p>Next Of Kin</p>
                    <p>
                      <strong>IFEOLUWA HELEN</strong>
                    </p>
                  </div>
                  <div className="col-12">
                    <p>Contact Address</p>
                    <p>
                      <strong>1A ILUPEJU STREET, YABA, LAGOS</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-12">
                    <p>Relationship</p>
                    <p>
                      <strong>SISTER</strong>
                    </p>
                  </div>
                  <div className="col-12">
                    <p>Phone</p>
                    <p>
                      <strong>09098878909</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <p>
                    <strong>FIRST SITTING</strong>
                  </p>
                  <div className="col-12">
                    <p>Exam Number</p>
                    <p>
                      <strong>0123456789</strong>
                    </p>
                  </div>
                  <div className="col-12">
                    <p>Type</p>
                    <p>
                      <strong>WAEC (MAY/JUNE)</strong>
                    </p>
                  </div>
                  <div className="col-12">
                    <p>Exam Year</p>
                    <p>
                      <strong>2020</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <p>
                    <strong>SECOND SITTING</strong>
                  </p>
                  <div className="col-12">
                    <p>Exam Number</p>
                    <p>
                      <strong>0123456789</strong>
                    </p>
                  </div>
                  <div className="col-12">
                    <p>Type</p>
                    <p>
                      <strong>NECO JUNE/JULY</strong>
                    </p>
                  </div>
                  <div className="col-12">
                    <p>Exam Year</p>
                    <p>
                      <strong>2020</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-8">
                      <p>Subjects</p>
                      <p>
                        <strong>ENGLISH LANGUAGE</strong>
                      </p>
                      <p>
                        <strong>PHYSICS</strong>
                      </p>
                      <p>
                        <strong>CHEMISTRY</strong>
                      </p>
                      <p>
                        <strong>BIOLOGY</strong>
                      </p>
                      <p>
                        <strong>MATHEMATICS</strong>
                      </p>
                      <p>
                        <strong>GEOGRAPHY</strong>
                      </p>
                      <p>
                        <strong>ECONOMICS</strong>
                      </p>
                      <p>
                        <strong>TECHNICAL DRAWING</strong>
                      </p>
                      <p>
                        <strong>FURTHER MATHEMATICS</strong>
                      </p>
                    </div>
                    <div className="col-4">
                      <p>Grades</p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-8">
                      <p>Subjects</p>
                      <p>
                        <strong>ENGLISH LANGUAGE</strong>
                      </p>
                      <p>
                        <strong>PHYSICS</strong>
                      </p>
                      <p>
                        <strong>CHEMISTRY</strong>
                      </p>
                      <p>
                        <strong>BIOLOGY</strong>
                      </p>
                      <p>
                        <strong>MATHEMATICS</strong>
                      </p>
                      <p>
                        <strong>GEOGRAPHY</strong>
                      </p>
                      <p>
                        <strong>ECONOMICS</strong>
                      </p>
                      <p>
                        <strong>TECHNICAL DRAWING</strong>
                      </p>
                      <p>
                        <strong>FURTHER MATHEMATICS</strong>
                      </p>
                    </div>
                    <div className="col-4">
                      <p>Grades</p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                      <p>
                        <strong>A</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="mt-4 mb-2">
              <button type="submit" className="btn bg-success">
                <a
                  className="submit-link"
                  href
                  style={{ textDecoration: "none" }}>
                  Print Slip
                </a>
              </button>
              <button
                type="submit"
                className="btn bg-white text-success border border-success ml-5"
                style={{}}>
                <a
                  className="submit-link text-success"
                  href="thankYou.html"
                  style={{ textDecoration: "none" }}>
                  Finish
                </a>
              </button>
            </div>
          </div>
        </div>
        <ProgressCard />
      </div>
    </>
  );
}
