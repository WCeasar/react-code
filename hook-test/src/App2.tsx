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
  console.log("aaa");
  useEffect(() => {
    // console.log("xxx");
    // queryData().then((data) => {
    // 想用async await 语法需要单独写一个函数，因为useEffect参数的那个函数不支持async
    //   setNum(data);
    // });

    console.log("effect");
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    // 当deps数组变了，重新执行effect之前，会先执行清理函数，打印clean up
    // 此外， 组件销毁时也会调用clean up函数来进行清理
    return () => {
      console.log("clean up");
      clearInterval(timer);
    };
  }, [num]); // 不传deps数组的时候也是每次都会重新执行effect函数 也就是和写在组件内一样

  return <div onClick={() => setNum((prevNum) => prevNum + 1)}> {num}</div>;
}

export default App;
