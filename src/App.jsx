import { useState } from "react";
import Frontend from "./layouts/FrontendLayout.jsx";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login.jsx"
import BackToTopButton from './layouts/BackToTopButton.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontend />}>
            <Route index element={<Home />} />            
          </Route> 

          <Route path="/login" element={<Login />} />        

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />            
          </Route> 

        </Routes>
        <BackToTopButton />
      </BrowserRouter>
    
    </>
  );
}

export default App;
