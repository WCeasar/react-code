import React, { useLayoutEffect, useState } from "react";

async function queryData(): Promise<number> {
  const data: number = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });

  return data;
}

function App() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    queryData().then((data) => {
      setNum(data);
    });
  });

  return (
    <div
      onClick={() => {
        setNum((prevNum) => prevNum + 1);
      }}
    >
      {num}
    </div>
  );
}

export default App;
