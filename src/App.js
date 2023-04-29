import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Charts from "./Pages/Charts";
import All from "./Pages/All";
import ReportForm from "./Pages/ReportForm";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Charts />} />
          <Route path="/listall" element={<All />} />
          <Route path="/form" element={<ReportForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
