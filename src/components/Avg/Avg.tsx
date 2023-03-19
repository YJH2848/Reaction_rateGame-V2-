import { useStore } from "../../state/zustand";
import * as S from "./Avg.style";
interface Props {
  name: boolean;
}
export const Tier = ({ name }: Props) => {
  const { result, saveResult } = useStore();
  const sum = result.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum / result.length).toFixed();

  console.log(result);
  return (
    <div>
      {name ? (
        <S.Avg> 너의 평균 반응속도: {avg}</S.Avg>
      ) : (
        <div>평균을 합산중입니다</div>
      )}
    </div>
  );
};
