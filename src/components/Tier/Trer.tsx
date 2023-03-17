import { useStore } from "../state/zustand";
interface Props {
  name: boolean;
}
export const Tier = ({ name }: Props) => {
  const { result, saveResult } = useStore();
  const sum = result.reduce((acc, curr) => acc + curr, 0);

  const see = () => {
    console.log(name);
  };
  return (
    <div>
      {name ? (
        <div> 넘겨 받은 값들의 합: {(sum / result.length).toFixed()}</div>
      ) : (
        <div>평균을 합산중입니다</div>
      )}
    </div>
  );
};
