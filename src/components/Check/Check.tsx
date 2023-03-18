import { useState, useRef } from "react";
import * as S from "./Check.style";
import { useStore } from "../../state/zustand";
import { Tier } from "../Tier/Trer";

export const Check = () => {
  const firstMsg = "당신의 티어를 맞춰보겠습니다.";
  const [msg, setMsg] = useState<string>(firstMsg);
  const [state, setState] = useState<string>("waiting");
  const [color, setColor] = useState("red");
  const { result, saveResult, resetResult } = useStore();
  const [bool, setBool] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const Num = useStore((state) => state.result);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const stratTime = useRef<number>();
  const endTime = useRef<number>();

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
        setCount(count + 3);
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
      setMsg(`총 기회 ${count}/5번`);
      setColor("red");
      Num.push((endTime.current || 0) - (stratTime.current || 0));
      if (count === 6) {
        setBool(true);
        setColor("gray");
        setMsg(
          "기회를 다 사용하였습니다.\n다시 플레이하고 싶으시면 한번 더 클릭해주세요."
        );
        setState("finish");
      }
    } else if (state == "finish") {
      setState("waiting");
      setMsg(firstMsg);
      setCount(0);
      resetResult();
      setColor("red");
      setBool(false);
    }
  };
  return (
    <S.Container>
      <S.Screen onClick={ClickScreen} style={{ background: `${color}` }}>
        <S.Comment>{msg}</S.Comment>
        <br />
        {bool ? null : <S.Rate>너의 반속은 :{Num.join(", ")}</S.Rate>}

        <Tier name={bool} />
      </S.Screen>
    </S.Container>
  );
};
