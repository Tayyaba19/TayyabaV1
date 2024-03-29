
import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Project from "./Compoenents/Project/Project";
import Home from "./Compoenents/Home/Home";
import Experience from "./Compoenents/Experience/Experience";
import Sidebar from "./Compoenents/Sidebar/Sidebar";
import About from "./Compoenents/About/About";
import More from "./Compoenents/More/More";


function App() {

  return (
 
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="about" element={<About/>} />
        <Route path="more" element={<More/>} />
    </Routes>
  </HashRouter>
  
  );
}

export default App;
