import { useState } from "react";

function App() {
  const [number, setNumber] = useState(() => {
    // 这个函数只能写一些同步的计算逻辑， 不支持异步
    const num1 = 1 + 2;
    const num2 = 2 + 3;
    return num1 + num2; // 初始值为8
  });

  return <div onClick={() => setNumber(number + 1)}>{number}</div>;
}

export default App;
