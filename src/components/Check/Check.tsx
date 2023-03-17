import { useState, useRef } from "react";
import * as S from "./Check.style";
import { useStore } from "../state/zustand";
import { Tier } from "../Tier/Trer";

export const Check = () => {
  const [msg, setMsg] = useState<string>("당신의 티어를 맞춰보겠습니다.");
  const [state, setState] = useState<string>("waiting");
  const [color, setColor] = useState("red");
  const { result, saveResult } = useStore();
  const Num = useStore(state => state.result);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const stratTime = useRef<number>();
  const endTime = useRef<number>();
  const [bool, setBool] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  const ClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMsg("초록색으로 변경 되었을 때 Click하세요!");
      setColor("blue");
      saveResult();
      timeout.current = setTimeout(() => {
        setState("now");
        setMsg("클릭!");
        setColor("green");
        setCount(count + 1);
        stratTime.current = +new Date();
      }, Math.floor(Math.random() * 1000) + 3000);
    } else if (state === "ready") {
      clearTimeout(timeout.current!);
      setState("waiting");
      setMsg("예측으로 찍지마라");
      setColor("red");
    } else if (state === "now") {
      endTime.current = +new Date();
      setState("waiting");
      setMsg("");
      setColor("red");
      Num.push((endTime.current || 0) - (stratTime.current || 0));
      if (count === 5) {
        setBool(true);
        setState("finish");
      }
    } else if (state === "finish") {
      setColor("gray");
    }

    console.log(count);
    console.log(state);
  };
  return (
    <S.Screen onClick={ClickScreen} style={{ background: `${color}` }}>
      {msg}
      <br />
      너의 반속은 :{Num.join(", ")}
      <Tier name={bool} />
    </S.Screen>
  );
};
