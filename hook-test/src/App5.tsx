import { useEffect, useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); // ref 其实就是一个有 current 属性的对象，除了可以保存 dom 引用，也可以放别的内容
  });

  const numRef = useRef<number>(0); // useRef不会触发重新渲染
  const [, forceRender] = useState(0); // useState会触发重新渲染

  return (
    <>
      <input type="text" ref={inputRef} />

      <div>
        <div
          onClick={() => {
            numRef.current += 1;
            forceRender(Math.random());
          }}
        >
          {numRef.current}
        </div>
      </div>
    </>
  );
}

export default App;
