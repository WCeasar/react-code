import { useState } from "react";
import { useMergeState } from "./useMergeState";

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  console.log("render1");

  const { value: propsValue, defaultValue, onChange } = props;

  const [mergeValue, setValue] = useMergeState(new Date(), {
    value: propsValue,
    defaultValue: defaultValue,
    onChange,
  });

  return (
    <div>
      {mergeValue?.toLocaleDateString()}
      <div onClick={() => setValue(new Date(2034, 4, 1))}>2034-5-1</div>
      <div onClick={() => setValue(new Date(2034, 4, 2))}>2034-5-2</div>
      <div onClick={() => setValue(new Date(2034, 4, 3))}>2034-5-3</div>
    </div>
  );
}

// function App() {
//   console.log("render2");

//   return (
//     <Calendar
//       defaultValue={new Date("2034-5-1")}
//       onChange={(date) => {
//         console.log(date.toLocaleDateString());
//       }}
//     ></Calendar>
//   );
// }

function App() {
  console.log("render2");

  const [value, setValue] = useState(new Date("2034-5-1"));

  return (
    <Calendar
      value={value}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
        setValue(date);
      }}
    ></Calendar>
  );
}

export default App;
