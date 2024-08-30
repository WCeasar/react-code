import { ChangeEvent, useState } from "react";
// import { ChangeEvent, useRef, useState } from "react";

function App() {
  // 非受控组件
  // const inputRef = useRef<HTMLInputElement>(null);
  // function onChange(event: ChangeEvent<HTMLInputElement>) {
  //   // function 1
  //   // console.log(event.target.value);
  //   // function 2
  // console.log(inputRef.current?.value);
  // }
  // return <input defaultValue={"wang"} onChange={onChange} ref={inputRef} />;

  // 受控组件
  const [value, setValue] = useState("wang");

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value.toUpperCase());
    console.log(value);
  }

  return <input value={value} onChange={onChange} />;
}

export default App;
