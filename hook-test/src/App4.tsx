// useReducer
// 在 react 里，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer。

import { Reducer, useReducer, useState } from "react";
import { produce } from "immer";

interface Data {
  // result: number;
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}

interface Action {
  // type: "add" | "minus";
  type: "add";
  num: number;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      // 第一个参数是要修改的对象
      // 第二个参数的函数里直接修改这个对象的属性,返回的结果就是一个新的对象
      return produce(state, (state) => {
        state.a.c.e += action.num;
      });
    // {
    //   ...state,
    //   a: {
    //     ...state.a,
    //     c: {
    //       ...state.a.c,
    //       e: state.a.c.e + action.num,
    //     },
    //   },
    // };
    // return {
    // result: state.result + action.num,
    // };
    // state.result += action.num;
    // return state; // 直接修改原始的state返回,是触发不了重新渲染的. 必须返回一个新对象
    // case "minus":
    //   return {
    //     result: state.result - action.num,
    //   };
  }

  return state;
}

function App() {
  // const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, {
  //   result: 0,
  // });

  // 通过函数来创建初始数据, 这个时候useReducer的第二个参数就是传给这个函数的参数
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "zero",
    (param) => {
      return {
        a: {
          c: {
            e: 0,
            f: 0,
          },
          d: 0,
        },
        b: 0,
      };
    }
  );
  const [obj, setObj] = useState({
    a: {
      c: {
        e: 0,
        f: 0,
      },
      d: 0,
    },
    b: 0,
  });

  return (
    <>
      <div>
        <div onClick={() => dispatch({ type: "add", num: 2 })}>加</div>
        {/* <div onClick={() => dispatch({ type: "minus", num: 1 })}>减</div> */}
        {JSON.stringify(res)}
      </div>

      <div>
        <div
          onClick={() => {
            setObj(
              produce(obj, (obj) => {
                obj.a.c.e++;
              })
            ); //因为对象引用没变,所以同样不会重新渲染
          }}
        >
          加
        </div>
        <div>{JSON.stringify(obj)}</div>
      </div>
    </>
  );
}

export default App;
