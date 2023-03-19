import React from "react";
import * as S from "./Header.style";

export const Header = () => {
  return (
    <S.Header>
      <S.MenuContainer>
        <S.MenuItem to={"/ranking"}>랭킹보기</S.MenuItem>
        <S.MenuItem to={"/tier"}>티어보기</S.MenuItem>
      </S.MenuContainer>
    </S.Header>
  );
};
