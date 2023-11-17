import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FormLapor from "./Pages/FormLapor";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="bg-[#F5F5DC] flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lapor" element={<FormLapor />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
