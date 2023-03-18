import styled from "styled-components";

export const Header = styled.header`
  background-color: rgba(128, 128, 128, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 60%;
`;

export const MenuItem = styled.div`
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  &:hover {
    transform: scale(0.9);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    height: 105%;
  }
`;
