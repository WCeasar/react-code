import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  SetStateAction,
} from "react";

function useMergeState<T>(
  defaultStateValue: T,
  props: {
    defaultValue?: T;
    value?: T;
    onChange?: (value: T) => void;
  }
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const { defaultValue, value: propsValue } = props || {};

  const isFirstRender = useRef(true);

  const [statevalue, setStateValue] = useState<T>(() => {
    if (propsValue !== undefined) {
      return propsValue;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (propsValue === undefined && !isFirstRender.current) {
      //  从受控组件转换到非受控组件
      setStateValue(propsValue!);
    }

    isFirstRender.current = false;
  }, [propsValue]);

  const mergedValue = propsValue !== undefined ? propsValue : statevalue;

  // eslint-disabled-next-line
  function isFunction(value: unknown): value is Function {
    return typeof value === "function";
  }

  const setState = useCallback(
    (value: SetStateAction<T>) => {
      if (isFunction(value)) {
        setStateValue(value(statevalue));
      } else {
        setStateValue(value);
      }
    },
    [statevalue]
  );

  return [mergedValue, setState];
}

export default useMergeState;
