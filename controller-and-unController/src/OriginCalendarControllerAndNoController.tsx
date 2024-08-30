import { useEffect, useRef, useState } from "react";

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  console.log("render1");

  const { value: propsValue, defaultValue, onChange } = props;

  const [value, setValue] = useState(() => {
    if (propsValue !== undefined) {
      return propsValue;
    } else {
      return defaultValue;
    }
  });

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      // 如果式第一次渲染不是第一次渲染,则设置默认值
      setValue(propsValue);
    }
    isFirstRender.current = false;
  }, [propsValue]);

  const mergeValue = propsValue === undefined ? value : propsValue;

  function changeValue(date: Date) {
    if (propsValue === undefined) {
      setValue(date);
    }
    onChange?.(date);
  }

  return (
    <div>
      {mergeValue?.toLocaleDateString()}
      <div onClick={() => changeValue(new Date(2034, 4, 1))}>2034-5-1</div>
      <div onClick={() => changeValue(new Date(2034, 4, 2))}>2034-5-2</div>
      <div onClick={() => changeValue(new Date(2034, 4, 3))}>2034-5-3</div>
    </div>
  );
}

function App() {
  console.log("render2");

  return (
    <Calendar
      defaultValue={new Date("2034-5-1")}
      onChange={(date) => {
        console.log(date.toLocaleDateString());
      }}
    ></Calendar>
  );
}

// function App() {
//   console.log("render2");

//   const [value, setValue] = useState(new Date("2034-5-1"));

//   return (
//     <Calendar
//       value={value}
//       onChange={(date) => {
//         console.log(date.toLocaleDateString());
//         setValue(date);
//       }}
//     ></Calendar>
//   );
// }

export default App;
