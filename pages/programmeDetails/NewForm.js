import { Tabs, Typography, Space } from "antd";
import { BsPersonCircle } from "react-icons/bs";
import {
  HiOutlineDocument,
  HiOutlineDocumentDuplicate,
  HiOutlineLibrary,
} from "react-icons/hi";
import { BiBookOpen } from "react-icons/bi";
import { Card } from "react-bootstrap";
import React, { useState } from "react";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
import ProgressCard from "../Application/progressCard";
import PersonDetails from "./personDetails";
import Olevel from "./olevel";
import Education from "./education";
import Documents from "./documents";
import Programme from "./programme";
import { useMutation } from "@apollo/client";
import { SUBMIT_APPLICATION_FORM } from "../../api/mutations/adminMutation";
const { TabPane } = Tabs;
const { Text } = Typography;

export default function NewForm() {
  const [AppForm, { loading: appLoading, error: appError, data: appData }] =
    useMutation(SUBMIT_APPLICATION_FORM);
  // Response Details
  const [groupName, setGroupName] = useState("");
  const [key, setKey] = useState();
  const [value, setValue] = useState("");
  // OlevelResultCombination
  const [centerCode, setcenterCode] = useState("");
  const [centerName, setCenterName] = useState("");
  const [examCode, setExamCode] = useState("");
  const [examNumber, setExamNumber] = useState("");
  const [examYear, setExamYear] = useState("");
  const [meetsCriteria, setMeetsCriteria] = useState(true);
  // OLevelResultCombinationDetails
  const [dateCreated, setDateCreated] = useState("");
  const [grade, setGrade] = useState("");
  const [gradeDesc, setGradeDesc] = useState("");
  const [subject, setSubject] = useState("");

  const [olevelType, setOlevelType] = useState("");
  const [olevelTypeId, setOlevelTypeId] = useState("");
  const [scannedCopyUrl, setScannedCopyUrl] = useState("");
  const [scratchCardPin, setScratchcardPin] = useState("");

  const [applicantAppliedCourseId, setApplicantAppliedCourseId] = useState("");

  // ONCHANGE FUNCTIONS PASSED AS PROPS

  // O-LEVEL PAGE

  const GroupNameValue = (e) => {
    e.preventDefault;
    setGroupName(e.target.value);
  };

  const ExamNumberValue = (e) => {
    e.preventDefault;
    setExamNumber(e.target.value);
  };

  const ExamYearValue = (e) => {
    e.preventDefault;
    setExamYear(e.target.value);
  };

  const OlevelTypeValue = (e) => {
    e.preventDefault;
    setOlevelType(e.target.value);
    console.log(olevelType);
  };

  const ScratchCardPinValue = (e) => {
    e.preventDefault;
    setScratchcardPin(e.target.value);
  };

  const SubmitAppForm = async () => {
    const AppFormData = await AppForm({
      variables: {
        responseDetails: {
          groupName: groupName,
          key: key,
          value: value,
        },
        olevelResultCombination: {
          centerCode: centerCode,
          centerName: centerName,
          examCode: examCode,
          examNumber: examNumber,
          examYear: examYear,
          meetsCriteria: meetsCriteria,
          olevelResultCombinationDetails: {
            dateCreated: dateCreated,
            grade: grade,
            gradeDesc: gradeDesc,
            subject: subject,
          },
          olevelType: olevelType,
          olevelTypeId: olevelTypeId,
          scannedCopyUrl: scannedCopyUrl,
          scratchCardPin: scratchCardPin,
        },
        applicantAppliedCourseId: applicantAppliedCourseId,
      },
    });
  };
  return (
    // <Frontlayout>
    <div className="">
      <div className="" style={{ marginTop: "-20px", paddingTop: "-20px" }}>
        <Card
          style={{
            background: "#FFFFFF",
            boxShadow:
              "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
            borderRadius: "10px",
            border: "none",
            padding: "54px",
          }}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <Space>
                  <BsPersonCircle style={{ color: "#047735" }} />
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",

                      color: "#047735",
                    }}>
                    Personal Details
                  </Text>
                </Space>
              }
              key="1">
              <PersonDetails />
            </TabPane>

            <TabPane
              tab={
                <Space>
                  <HiOutlineDocument style={{ color: "#047735" }} />
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",

                      color: "#047735",
                    }}>
                    O’Level
                  </Text>
                </Space>
              }
              key="2">
              <Olevel
                scratchcard={ScratchCardPinValue}
                oleveltype={OlevelTypeValue}
                examNumber={ExamNumberValue}
                examYear={ExamYearValue}
              />
            </TabPane>

            <TabPane
              tab={
                <Space>
                  <HiOutlineLibrary style={{ color: "#047735" }} />
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",

                      color: "#047735",
                    }}>
                    Education
                  </Text>
                </Space>
              }
              key="3">
              <Education />
            </TabPane>

            <TabPane
              tab={
                <Space>
                  <HiOutlineDocumentDuplicate style={{ color: "#047735" }} />
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",

                      color: "#047735",
                    }}>
                    Documents
                  </Text>
                </Space>
              }
              key="4">
              <Documents />
            </TabPane>

            <TabPane
              tab={
                <Space>
                  <BiBookOpen style={{ color: "#047735" }} />
                  <Text
                    style={{
                      fontSize: "12px",
                      lineHeight: "14px",

                      color: "#047735",
                    }}>
                    Programme
                  </Text>
                </Space>
              }
              key="5">
              <Programme />
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
    // </Frontlayout>
  );
}
