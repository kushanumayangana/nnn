import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../app/Home/page';
import ModelTest from "../app/AuthModels/ModelTest";

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modeltest" element={< ModelTest />} />
      </Routes>
    </Router>
  );
};
export default Page;
