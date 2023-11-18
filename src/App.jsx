import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FormLapor from "./Pages/FormLapor";
import DashboardLaporan from "./Pages/DashboardLaporan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lapor" element={<FormLapor />} />
        <Route path="/dashboard/laporan" element={<DashboardLaporan />} />
      </Routes>
    </Router>
  );
}

export default App;
