import React, {
  ComponentProps,
  CSSProperties,
  MouseEventHandler,
  PropsWithChildren,
  useRef,
} from "react";

// interface AaaProps {
//   name: string;
//   // content: React.ReactElement;
//   content: React.ReactNode; // ReactNode 包含 ReactElement、或者 number、string、null、boolean 等可以写在 JSX 里的类型。
//   children: React.ReactNode;
// }

type AaaProps = PropsWithChildren<{
  name: string;
  content: React.ReactNode;
  styles?: CSSProperties;
  clickHandler: MouseEventHandler<HTMLDivElement>;
}>;

const Bbb = () => {
  return <>Bbb</>;
};

const Aaa: React.FunctionComponent<AaaProps> = (props) => {
  return (
    <div>
      aaa, {props.name}
      {props.content}
      {props.children}
    </div>
  );
};

function App() {
  const ref = useRef<ComponentProps<"a">>(null);

  // ref.current?.content;

  return (
    <>
      <Aaa
        name="wang"
        content={null}
        styles={{ background: "red" }}
        clickHandler={() => {}}
      >
        <Bbb></Bbb>
      </Aaa>
    </>
  );
}

const content: JSX.Element = <div>aaa</div>;

export default App;
