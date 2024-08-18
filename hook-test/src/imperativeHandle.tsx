import React, { useRef, useEffect, useImperativeHandle } from "react";

interface RefProps {
  aaa: () => void;
}

const Wang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  // 保存 dom 引用的时候，参数需要传个 null：不然会报错：
  // 而保存别的内容的时候，不能传 null，不然也会报错，说是 current 只读：
  // 当你传入 null 的时候，返回的是 RefObject，它的 current 是只读的
  // 而不传 null 的时候，返回的 MutableRefObject，它的 current 就可以改了：
  const inputRef = useRef<HTMLInputElement>(null);

  // 用useImperativeHandle可以返回一个对象，这个对象会赋值给ref，然后父组件可以通过ref.current来调用子组件的方法
  useImperativeHandle(ref, () => {
    return {
      aaa() {
        inputRef.current?.focus();
      },
    };
  });

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

const WrapedWang = React.forwardRef(Wang);

function App() {
  const ref = useRef<RefProps>(null); // 这个ref是useImperativeHandle第二个参数的返回值

  useEffect(() => {
    console.log("ref", ref.current);
    ref.current?.aaa();
  }, []);

  return (
    <div className="App">
      <WrapedWang ref={ref} />
    </div>
  );
}

export default App;
