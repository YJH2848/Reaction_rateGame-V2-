import { Check } from "./components/Check/Check";
import { Reset } from "styled-reset";
import { Header } from "./components/Header/Header";
import styled from "styled-components";
export const App = () => {
  return (
    <div>
      <Bg>
        <Reset />
        <Header />
        <Check />
      </Bg>
    </div>
  );
};

export const Bg = styled.body`
  background-image: url("./img/bg.png");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
