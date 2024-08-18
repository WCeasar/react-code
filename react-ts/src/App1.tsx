import React from "react";

interface AaaProps {
  name: string;
  // content: React.ReactElement;
  content: React.ReactNode; // ReactNode 包含 ReactElement、或者 number、string、null、boolean 等可以写在 JSX 里的类型。
}

const Aaa: React.FunctionComponent<AaaProps> = (props) => {
  return (
    <div>
      aaa, {props.name}
      {props.content}
    </div>
  );
};

function App() {
  return (
    <>
      <Aaa name="wang" content={null}></Aaa>
    </>
  );
}

const content: JSX.Element = <div>aaa</div>;

export default App;
