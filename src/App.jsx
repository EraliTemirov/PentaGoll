import {Route , Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Admin_Home from "./Admin_page/Admin_Home";

function App() {

  return (
   
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin_Home/>}/>
      </Routes>
      
  )
}

export default App;
