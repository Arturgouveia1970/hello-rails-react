import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Message from "./Greeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;