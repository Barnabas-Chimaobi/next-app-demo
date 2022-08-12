import Head from 'next/head'
import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import {Navbar}  from '../components/nav'

export default function Home() {
  return (
  <>
  <div className="d-block d-lg-flex container mt-3 mb-3">
    <h2 className="">Application Form Invoice</h2>
  </div>
  <div className="container d-block d-lg-flex">
    <div className="card col-lg-8 col-sm-12  d-lg-flex">
      <h4 className="mt-3">Program Details</h4>
      <div className="d-block d-lg-flex">
        <div className="col-lg-8 col-sm-12">
          <form>
            <div className="row">
              <div className="form-group col-lg-6">
                <label htmlFor="inputProgramme">Programme</label>
                <select id="inputProgramme" className="form-control bg-light">
                  <option selected="">SELECT A PROGRAMME</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="inputCourse">Course</label>
                <select id="inputCourse" className="form-control bg-light">
                  <option selected="">SELECT A COURSE</option>
                  <option>...</option>
                </select>
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-lg-6">
                <label htmlFor="inputJamb">JAMB Reg No.</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputJamb"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="inputCourse">Course Option</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputCourse"
                />
              </div>
            </div>
            <h4 className="mt-4">Personal Details</h4>
            <div className="row">
              <div className="form-group col-lg-6">
                <label htmlFor="inputSurname">Surname</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputSurname"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="inputFname">First Name</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputFname"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-6">
                <label htmlFor="inputOtherName">Other Name</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputOtherName"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="inputState">State</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputState"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-6">
                <label htmlFor="inputPhone">Mobile Phone</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputPhone"
                />
              </div>
              <div className="form-group col-lg-6">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="text"
                  className="form-control bg-light"
                  id="inputEmail"
                />
              </div>
            </div>
            {/* Submit button */}
            <button type="submit" className="btn darkGreen ">
              <a
                className="submit-link"
                style={{ textDecoration: "none" }}
                href="/makePayment"
              >
                Submit
              </a>
            </button>
          </form>
        </div>
        {/* 5k fee */}
        <div
          className="card col-lg-4 col-sm-12  bg-success text-light p-4 mt-sm-3"
          style={{ height: "70% ! important" }}
        >
          <p className="text-white">Fee for selected programme:</p>
          <h2 className="lightYellow">N5,000.00</h2>
          <div className="lightGreen rounded  text-white p-4">
            <p>
              Ensure to check the course requirements on the department's page
              of the official site{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* New student app */}
    <div className="card col-lg-4 col-sm-12 darkGreen ml-lg-3 mt-sm-3">
      <div className="mr-4 mt-4 lightGreen text-white rounded p-2">
        <h4>
          <i className="fa-solid fa-user text-white" />
          New Student Application
        </h4>
      </div>
      <div className="container d-flex mt-3">
        <div className="Activestep ">
          <p className="lightYellow ml-3 mt-2 stepNumber">01</p>
        </div>
        <div className="ml-2">
          <p className="lightYellow">Step 1</p>
          <h5 className="text-white">Generate Invoice</h5>
        </div>
      </div>
      <div className="container vlDefault ml-5"></div>
      <div className="container d-flex mt-3 fadedGrey">
        <div className="Defaultstep ">
          <p className="fadedGrey ml-3 mt-2 stepNumber">02</p>
        </div>
        <div className="ml-2">
          <p className="lightYellow">Step 2</p>
          <h5 className="text-white">Make Payment</h5>
        </div>
      </div>
      <div className="container vlDefault ml-5"></div>
      <div className="container d-flex mt-3">
        <div className="Defaultstep ">
          <p className="fadedGrey ml-3 mt-2 stepNumber">03</p>
        </div>
        <div className="ml-2">
          <p className="fadedGrey">Step 3</p>
          <h5 className="text-white">Application Form</h5>
        </div>
      </div>
      <div className="container vlDefault ml-5"></div>
      <div className="container d-flex mt-3">
        <div className="Defaultstep ">
          <p className="fadedGrey ml-3 mt-2 stepNumber">04</p>
        </div>
        <div className="ml-2">
          <p className="fadedGrey">Step 4</p>
          <h5 className="text-white">Acknowledgement Slip</h5>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

