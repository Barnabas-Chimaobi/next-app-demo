import React, { useState } from "react";
import { gql, useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { STAFF_LOGIN } from "../api/mutations/authMutation";
import { useRouter } from "next/router";
import Frontlayout from "../Layouts/FrontLayout/frontlayout";
import Head from "next/head";
import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import { Space, Typography, Form, Input } from "antd";
import Link from "next/link";
import StudentLottie from "../public/Lottie/StudentLottie.json";
import { LottiePlayer } from "lottie-web";
const { Text } = Typography;

export default function index() {
  const router = useRouter();
  const [
    staffLogin,
    { loading: loginLoading, error: loginError, data: loginData },
  ] = useMutation(STAFF_LOGIN);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginStaff = async () => {
    console.log(username, password, "login======");
    const login = await staffLogin({
      variables: {
        username: username,
        password: password,
      },
    });
  };

  // if(loginError){console.log(loginError, 'errooorrsss====')}
  // if(loginLoading){console.log(loginLoading, 'loginloadinggsss====')}
  if (loginData) {
    router.push("./admin/applicationSetup");
    console.log(loginData, "logindataaaaass====");
  }

  {
    /* <form action="">
<div className="input-group input-group-lg mb-3">
  <div className="input-group-prepend">
  </div>
  <div className="pt-3">
      <div className="mt-4">
      <input
          type="text"
          className="form-control bg-light"
          id="inputRRR"
          placeholder="Username"
          onChange={(text) => setUsername(text.target.value)}
      />
      </div>
      <div className="mt-3">
      <input
          type="text"
          className="form-control bg-light"
          id="inputRRR"
          placeholder="Password"
          onChange={(text) => setPassword(text.target.value)}
      />
      </div>
  <div className="mt-5 mb-3">
  <button
      type="submit"
      className="btn darkGreen btn-block"
      style={{ width: "" }}
      onClick={() => loginStaff()} */
  }

  return (
    <Frontlayout>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-lg-6 col-sm-12 card-1">
              <h3
                className="justify-content-center"
                style={{ marginTop: "10em", marginBottom: "3rem" }}>
                Sign in
              </h3>

              <form action="">
                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    {/* <!-- <span class="input-group-text" id="inputGroup-sizing-default"
                  >Default</span
                 > --> */}
                  </div>

                  <Form.Item
                    style={{ paddingLeft: "", width: "98%" }}
                    name="text"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}>
                    <Input
                      className="form-control bg-light"
                      placeholder="Enter Username"
                      style={{ padding: "0.6em 1em", borderRadius: "5px" }}
                      onChange={(text) => setUsername(text.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="input-group input-group-lg mb-3">
                  <div className="input-group-prepend">
                    {/* <!-- <span class="input-group-text" id="inputGroup-sizing-lg"
                  >Default</span
                */}
                  </div>

                  <Form.Item
                    // label="Password"
                    // defaultValue="Enter Password"
                    style={{ paddingLeft: "", width: "98%" }}
                    // placeholder="Enter Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}>
                    <Input.Password
                      className="form-control bg-light"
                      placeholder="Enter Password"
                      style={{ padding: "0.6em 1em", borderRadius: "5px" }}
                      onChange={(text) => setPassword(text.target.value)}
                    />
                  </Form.Item>
                </div>

                <div
                  clasName="form-check"
                  style={{
                    paddingLeft: "1rem",
                    paddingBottom: "2rem",
                    alignItem: "center",
                  }}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-dark pl-2"
                    for="flexCheckDefault">
                    Remember Me
                  </label>
                </div>

                <button
                  style={{ backgroundColor: "#047735", fontSize: "15px" }}
                  className="btn text-white btn-block pt-3 pb-3"
                  type="submit"
                  onClick={() => loginStaff()}>
                  Sign In
                </button>

                <div
                  style={{
                    display: "flex",
                    textAlign: "center",
                    alignContent: "center",
                    paddingLeft: "40%",
                  }}>
                  <Link
                    href="#"
                    style={{
                      alignSelf: "center",
                      textAlign: "center",
                      paddingTop: "2rem",
                    }}>
                    <label className="text-dark pt-4">Forget Password?</label>
                  </Link>
                </div>
              </form>
            </div>

            <div class="col-lg-6 col-sm-12 pl-5">
              <div
                class="card card-2 mt-5"
                style={{ backgroundColor: "#cfb127" }}>
                <p class="text-center text-white mt-4"></p>
                <center>
                  <div className="justify-content-center mt-5">
                    <img
                      style={{ width: "500px" }}
                      src="../../Lottie/StudentLottie.PNG"
                      alt="image of a floating student"
                    />
                  </div>
                </center>

                <div
                  className="justify-content-center  mr-4"
                  style={{
                    paddingLeft: "2rem",
                    paddingTop: "1em",
                    paddingBottom: "4em",
                    color: "white",
                  }}>
                  <center>
                    <h1 className="text-white" style={{ padding: "0 auto" }}>
                      Welcome
                    </h1>
                  </center>
                </div>
              </div>
            </div>
          </div>
          <p style={{ color: "#047735", float: "right" }}>
            (C) 2022, All Rights Reserved.
          </p>
        </div>
      </div>
    </Frontlayout>
  );
}
