import {Route , Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Admin_Home from "./Admin_page/Admin_Home";

import Admin_Home_Yangilik from "./Admin_page/Component_admin/Admin_Home_Yangilik";
import Admin_Home_Mavsum from "./Admin_page/Component_admin/Admin_Home_Mavsum";
import Admin_Home_Jadval from "./Admin_page/Component_admin/Admi_Home_Jadval";
import './app.scss'
import SigIn from "./Pages/SigIn";


function App() {

  return (
   
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin_Home/>}/>
        <Route path="/adminmavsum" element={<Admin_Home_Mavsum/>} />
        <Route path="/adminjadval" element={<Admin_Home_Jadval/>} />
        <Route path="/register" element={<SigIn/>} />
      </Routes>
      
  )
}

export default App;
