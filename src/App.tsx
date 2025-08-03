import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import DoctorsLandingPage from "./Pages/Landing/Component";
import DoctorProfilePage from "./Pages/Profile/Component";
import { doctors, DoctorsContext } from "./States/globalContext";

function App() {
  return (
    <BrowserRouter>
    <DoctorsContext value={{doctors}}>
 <Routes>
        <Route element={<DoctorsLandingPage />} path="/" />
        <Route  element={<DoctorProfilePage/>} path='/doctor/:id'/>
      </Routes>
    </DoctorsContext>
     
    </BrowserRouter>
  );
}

export default App;
