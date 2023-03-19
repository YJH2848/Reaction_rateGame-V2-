import styled from "styled-components";
import { Check } from "../components/Check/Check";
import { Header } from "../components/Header/Header";
export const Game = () => {
  return (
    <div>
      <Bg>
        <Header />
        <Check />
      </Bg>
    </div>
  );
};

const Bg = styled.body`
  background-image: url("./img/bg.png");
  background-size: cover;
`;
