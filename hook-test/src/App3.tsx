// useLayoutEffect

function App() {
  // useEffect的effect函数会在操作dom之后异步执行
  // useLayoutEffect和useEffect的区别是他的effect执行时同步的，也就是在同一个任务中
  // 这样浏览器会等effect逻辑执行完成之后再渲染
  // 好处是不会再闪动了
  // 坏处是如果effect逻辑要执行很久

  return <></>;
}

export default App;
