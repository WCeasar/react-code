import { useState } from "react";

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  console.log("render1");

  const { value = new Date(), onChange } = props;

  // const [value, setValue] = useState(defaultValue);

  function changeValue(date: Date) {
    // setValue(date);
    onChange?.(date);
  }

  return (
    <div>
      {value.toLocaleDateString()}
      <div onClick={() => changeValue(new Date(2034, 4, 1))}>2034-5-1</div>
      <div onClick={() => changeValue(new Date(2034, 4, 2))}>2034-5-2</div>
      <div onClick={() => changeValue(new Date(2034, 4, 3))}>2034-5-3</div>
    </div>
  );
}

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
