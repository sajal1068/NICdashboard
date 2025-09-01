import { useState } from "react";
import Frontend from "./layouts/FrontendLayout";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login"
import BackToTopButton from './layouts/BackToTopButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./layouts/AdminLayout";

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

      {/* <Routes>
        
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        
        <Route path="*" element={<div className="p-8 text-center">Page not found</div>} />
      </Routes>
      <BackToTopButton /> */}
    
    </>
  );
}

export default App;
