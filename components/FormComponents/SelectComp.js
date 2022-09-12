import { Form } from "react-bootstrap";

export default function SelectComp(props) {
  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label
          style={{
            fontFamily: "Gilroy-Medium",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#3E4851",
          }}>
          {props.label}
        </Form.Label>
        <Form.Select
          style={{
            maxWidth: props.maxWidth,
            border: "1px solid #000000",
            borderRadius: "10px",
            background: props.background,
          }}>
          {props.children}
        </Form.Select>
      </Form.Group>
    </div>
  );
}
