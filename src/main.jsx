import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import "./index.css";
import ForgotPassword from "./ForgotPassword.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div className="flex flex-col min-h-full min-w-full">
        <Header />
        <div className="content flex flex-col flex-1 justify-center items-center">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
