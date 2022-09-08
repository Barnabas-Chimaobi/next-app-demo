import { Input, Result, Typography } from "antd";
import { Card } from "react-bootstrap";
import Frontlayout from "../../Layouts/FrontLayout/frontlayout";

const { Text } = Typography;
export default function Warning(props) {
  return (
    <div>
      <Result
        status={"warning"}
        title={<Text>{props.title}</Text>}
        subTitle={<Text>{props.subtitle}</Text>}
        extra={props.extra}
      />
    </div>
  );
}
