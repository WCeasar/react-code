import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

function useInterval(fn: Function, delay?: number | null) {
  const callbackFn = useRef(fn);

  useLayoutEffect(() => {
    callbackFn.current = fn;
  });

  let cleanUpRef = useRef<Function>();

  const clean = useCallback(() => {
    cleanUpRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => callbackFn.current(), delay || 0);
    cleanUpRef.current = () => {
      clearInterval(timer);
    };

    return clean;
  }, []);

  return clean;
}

function App() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  useInterval(updateCount, 1000);

  return <div>{count}</div>;
}

export default App;
