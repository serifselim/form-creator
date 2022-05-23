import React from 'react';
import { Header } from './components';
import { Main, Form } from './pages';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="forms/:formName" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;