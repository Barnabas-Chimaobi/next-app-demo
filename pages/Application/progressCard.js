import { Space, Typography } from "antd";
import { BsPersonCircle } from "react-icons/bs";

const { Text } = Typography;

export default function progressCard() {
  return (
    <div
      className="card col-lg-4 col-sm-12 darkGreen ml-lg-3 mt-sm-3"
      style={{ paddingBottom: "40px" }}>
      <div className="mr-4 mt-4 lightGreen text-white rounded p-2">
        <Space>
          <BsPersonCircle style={{ width: "20px", height: "20px" }} />
          <Text
            style={{
              fontSize: "16px",
              fontFamily: "Montserrat",
              textTransform: "capitalize",
              color: "#FFFFFF",
            }}>
            New Student Application
          </Text>
        </Space>
      </div>
      <div className="container d-flex mt-3">
        <div className="Activestep ">
          <p
            className="lightYellow ml-3 mt-2 stepNumber"
            style={{ fontFamily: "Montserrat", fontSize: "20px" }}>
            01
          </p>
        </div>
        <div className="ml-2">
          <p style={{ fontFamily: "Montserrat" }} className="lightYellow">
            Step 1
          </p>
          <Text
            style={{ fontSize: "16px", fontFamily: "Montserrat" }}
            className="text-white">
            Generate Invoice
          </Text>
        </div>
      </div>
      <div className="container vlDefault ml-5"></div>
      <div className="container d-flex mt-3 fadedGrey">
        <div className="Defaultstep ">
          <p
            className="fadedGrey ml-3 mt-2 stepNumber"
            style={{ fontFamily: "Montserrat", fontSize: "20px" }}>
            02
          </p>
        </div>
        <div className="ml-2">
          <p className="lightYellow" style={{ fontFamily: "Montserrat" }}>
            Step 2
          </p>
          <Text
            style={{ fontSize: "16px", fontFamily: "Montserrat" }}
            className="text-white">
            Make Payment
          </Text>
        </div>
      </div>
      <div className="container vlDefault ml-5"></div>
      <div className="container d-flex mt-3">
        <div className="Defaultstep ">
          <p
            className="fadedGrey ml-3 mt-2 stepNumber"
            style={{ fontFamily: "Montserrat", fontSize: "20px" }}>
            03
          </p>
        </div>
        <div className="ml-2">
          <p className="fadedGrey" style={{ fontFamily: "Montserrat" }}>
            Step 3
          </p>
          <Text
            style={{ fontSize: "16px", fontFamily: "Montserrat" }}
            className="text-white">
            Application Form
          </Text>
        </div>
      </div>
      <div className="container vlDefault ml-5"></div>
      <div className="container d-flex mt-3">
        <div className="Defaultstep ">
          <p
            className="fadedGrey ml-3 mt-2 stepNumber"
            style={{ fontFamily: "Montserrat", fontSize: "20px" }}>
            04
          </p>
        </div>
        <div className="ml-2">
          <p className="fadedGrey" style={{ fontFamily: "Montserrat" }}>
            Step 4
          </p>
          <Text
            style={{ fontSize: "16px", fontFamily: "Montserrat" }}
            className="text-white">
            Acknowledgement Slip
          </Text>
        </div>
      </div>
    </div>
  );
}
