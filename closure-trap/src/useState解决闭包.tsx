import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("count", count);
      // 1. 解决闭包的第一种方案
      setCount((count) => count + 1);
    }, 1000);
    // ，现在 useEffect 的依赖数组是 []，也就是只会执行并保留第一次的 function
    // 第一次的 function 引用了当时的 count，形成了闭包
  }, []);

  return <div>{count}</div>;
}

export default App;
