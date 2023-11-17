import { useNavigate } from "react-router-dom";
import img from "../assets/img.jpg";
import { Button } from "@nextui-org/react";

const Layanan = () => {
  const navigate = useNavigate();

  const navigateToLapor = () => {
    console.log("daw");
    navigate("/lapor");
  };

  return (
    
  );
};

export default Layanan;
