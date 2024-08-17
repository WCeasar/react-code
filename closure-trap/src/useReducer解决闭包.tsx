import { Reducer, useEffect, useReducer } from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }

  return state;
}

function App() {
  const [count, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);
  // 因为它是 dispatch 一个 action，不直接引用 state，所以也不会形成闭包：
  useEffect(() => {
    console.log("count", count);

    setInterval(() => {
      dispatch({
        type: "add",
        num: 1,
      });
    }, 1000);
  }, []);

  return (
    <div>
      <div>{count}</div>
    </div>
  );
}

export default App;
