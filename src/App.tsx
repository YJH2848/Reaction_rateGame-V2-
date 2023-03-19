import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Game } from "./pages/Game";
import { Tier } from "./pages/Tier";
export const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/tier" element={<Tier />} />
      </Routes>
    </BrowserRouter>
  );
};
