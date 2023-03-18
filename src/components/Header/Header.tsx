import React from "react";
import * as S from "./Header.style";

export const Header = () => {
  return (
    <S.Header>
      <S.MenuContainer>
        <S.MenuItem>랭킹보기</S.MenuItem>
        <S.MenuItem>티어보기</S.MenuItem>
      </S.MenuContainer>
    </S.Header>
  );
};
