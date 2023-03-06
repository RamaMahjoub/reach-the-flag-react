import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Board/Board";
import { Level } from "./components/Level/Level";
import { NoMatch } from "./components/NoMatch/NoMatch";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/levels" element={<Level />} />
        <Route path="/level/:id" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
