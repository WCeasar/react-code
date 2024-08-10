import { useEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    queryData().then((data) => {
      // 想用async await 语法需要单独写一个函数，因为useEffect参数的那个函数不支持async
      setNum(data);
    });
  }, []);

  return <div onClick={() => setNum((prevNum) => prevNum + 1)}> {num}</div>;
}

export default App;
