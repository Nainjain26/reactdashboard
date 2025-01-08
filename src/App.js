import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <div className="main d-flex">
     <div className="sidebarwrapper">
      <Sidebar/>
     </div>
     <div className="content">
     <Routes>
    <Route path="/" exact={true} element={<Dashboard/>}/>
    <Route path="/Dashboard" exact={true} element={<Dashboard/>}/>
   </Routes>
     </div>
   </div>
  
   </BrowserRouter>
  );
}

export default App;
