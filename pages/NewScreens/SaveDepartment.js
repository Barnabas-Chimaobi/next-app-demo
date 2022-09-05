import { Input } from "antd";
import { Card } from "react-bootstrap";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";
export default function SaveDepartment() {
  return (
    <Frontlayout>
      <div>
        <Card
          style={{
            background: "#FFFFFF",
            boxShadow:
              "0px 60px 147px rgba(0, 0, 0, 0.035), 0px 7.51293px 18.4067px rgba(0, 0, 0, 0.07)",
            borderRadius: "10px",
            padding: "40px 37px",
          }}>
          <Input />
        </Card>
      </div>
    </Frontlayout>
  );
}
