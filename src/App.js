import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import DoctorsPage from "./components/doctorsPage/doctorsPage";
import Home from "./components/home";
import PacientPage from "./components/pacients/pacientPage";

function App() {
  return (
      <>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/doctors" element={<DoctorsPage />}/>
                  <Route path="/pacient/:PacientId" element={<PacientPage/>}/>
                  </Routes>
      </>
  );
}

export default App;
