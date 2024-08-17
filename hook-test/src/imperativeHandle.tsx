import React, { useRef, useEffect, useImperativeHandle } from "react";

interface RefProps {
  aaa: () => void;
}

const Wang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
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
