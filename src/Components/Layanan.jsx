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
    <div className="bg-white rounded-md flex items-center w-3/4 gap-6 p-8 max-md:flex-col">
      <img src={img} className="w-64 aspect-[4/3] rounded-lg "></img>
      <div>
        <h4 className="font-bold text-lg">
          Pelaporan pembuangan Limbah B3 yang tidak pada tempatnya
        </h4>
        <p className="my-2">
          Masyarakat dapat melaporkan secara langsung yang nantinya akan di
          verifikasi oleh admin Web untuk selanjutnya akan dilakukan tindak
          lanjut oleh tim khusus dari Dinas Lingkungan Hidup Kutai Kartanegara.
        </p>
        <Button onClick={navigateToLapor} color="primary">
          Lapor sekarang!
        </Button>
      </div>
    </div>
  );
};

export default Layanan;
