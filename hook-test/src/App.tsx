import { useEffect, useState, memo, useCallback, useMemo } from "react";

// ，useMemo 和 useCallback 是防止 props 的不必要变化。

function Aaa() {
  const [, setNum] = useState(1);

  const [count, setCount] = useState(2);

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random());
    }, 2000);
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(Math.random());
  //   }, 2000);
  // }, []);

  // 因为每次 function 都是新创建的，也就是每次 props 都会变，这样 memo 就没用了。
  function b() {}

  // 它的作用就是当 deps 数组不变的时候，始终返回同一个 function，当 deps 变的时候，才把 function 改为新传入的。
  const bbbCallback = useCallback(b, []);

  // useMemo 也是和 memo 打配合的，只不过它保存的不是函数，而是值：

  // 果子组件用了 memo，那给它传递的对象、函数类的 props 就需要用 useMemo、useCallback 包裹，否则，每次 props 都会变，memo 就没用了。
  // ，如果 props 使用 useMemo、useCallback，但是子组件没有被 memo 包裹，那也没意义，因为不管 props 变没变都会重新渲染，只是做了无用功。
  // memo + useCallback、useMemo 是搭配着来的，少了任何一方，都会使优化失效。
  // 比如有个值的计算，需要很大的计算量，你不想每次都算，这时候也可以用 useMemo 来缓存。
  const i = {};

  const count2 = useMemo(() => {
    return i;
  }, []);

  return (
    <div>
      <MemoBbb count={count2} callback={bbbCallback}></MemoBbb>
    </div>
  );
}

interface BbbProps {
  count: {};
  callback: Function;
}

function Bbb(props: BbbProps) {
  console.log("bbb render");

  return <h2></h2>;
}

// memo的作用是当props变的时候,才会重新渲染被包裹的组件
const MemoBbb = memo(Bbb);

export default Aaa;
