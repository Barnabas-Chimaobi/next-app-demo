import { Form, Input, Typography } from "antd";

const { Text } = Typography;

export default function TextBoxComp(props) {
  return (
    <div>
      <Form.Item
        name={props.name}
        label={
          <Text
            style={{
              fontFamily: "Gilroy-Medium",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#3E4851",
            }}>
            {props.label}
          </Text>
        }
        rules={[
          {
            required: true,
          },
        ]}>
        <Input
          style={{
            border: "1px solid #000000",
            borderRadius: "10px",
            maxWidth: props.maxWidth,
            background: props.background,
          }}
        />
      </Form.Item>
    </div>
  );
}
