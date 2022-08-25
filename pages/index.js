import Head from "next/head";
import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import { Space, Typography, Form, Input } from "antd";
import Link from "next/link";
import StudentLottie from "../public/Lottie/StudentLottie.json";
import { LottiePlayer } from "lottie-web";
// import styles from "../styles/Home.module.css";

const { Text } = Typography;
// const styles = {
//   container: {
//     height: "100vh",
//   },
//   // input: {
//   //   paddingTop: "1.6em",
//   //   paddingBottom: "1.6em",
//   //   borderTop: 0,
//   //   borderRight: 0,
//   //   borderLeft: 0,
//   //   borderBottom: "2px solid #C4C4C4",
//   //   borderRadius: "0px",
//   // },
// };

export default function Home() {
  return (
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
              style={{ marginTop: "10em", marginBottom: "3rem" }}
            >
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
                  ]}
                >
                  <Input
                    placeholder="Enter Username"
                    style={{ padding: "0.6em 1em", borderRadius: "5px" }}
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
                  ]}
                >
                  <Input.Password
                    placeholder="Enter Password"
                    style={{ padding: "0.6em 1em", borderRadius: "5px" }}
                  />
                </Form.Item>
              </div>

              <div
                clasName="form-check"
                style={{
                  paddingLeft: "1rem",
                  paddingBottom: "2rem",
                  alignItem: "center",
                }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-dark pl-2"
                  for="flexCheckDefault"
                >
                  Remember Me
                </label>
              </div>

              <button
                style={{ backgroundColor: "#047735" }}
                className="btn text-white btn-block pt-4 pb-4"
                type="submit"
              >
                Sign In
              </button>

              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignContent: "center",
                  paddingLeft: "40%",
                }}
              >
                <Link
                  href="#"
                  style={{
                    alignSelf: "center",
                    textAlign: "center",
                    paddingTop: "2rem",
                  }}
                >
                  <label className="text-dark pt-4">Forget Password?</label>
                </Link>
              </div>
            </form>
          </div>

          <div class="col-lg-6 col-sm-12 pl-5">
            <div
              class="card card-2 mt-5"
              style={{ backgroundColor: "#cfb127" }}
            >
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
                }}
              >
                <center>
                  <h1 className="text-white" style={{ padding: "0 auto" }}>
                    Welcome
                  </h1>
                </center>
              </div>
            </div>
          </div>
        </div>
        <p style={{ color: "#047735", float: "right", marginTop: "1em" }}>
          (C) 2022, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
