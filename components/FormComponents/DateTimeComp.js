import { DatePicker } from "antd";

export default function DateTimeComp(props) {
  return (
    <div>
      <DatePicker
        style={{
          maxWidth: props.maxWidth,
          border: "1px solid #000000",
          borderRadius: "10px",
          background: props.background,
        }}
      />
    </div>
  );
}
