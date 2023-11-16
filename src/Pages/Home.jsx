import statIcon from "../assets/icon_stat.png";
import Layanan from "../Components/Layanan";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToLapor = () => {
    navigate("/lapor");
  };

  return (
    <main className="flex flex-col bg-[#F5F5DC] items-center">
      <section className="flex justify-center items-center mt-32 max-md:flex-col mx-4">
        <div className="">
          <h3 className="text-2xl font-bold">Halo buhan Kukar!</h3>
          <p className="my-4 font-normal">
            Selamat datang di Website Pelaporan dan Monitoring Limbah B3 Dinas
            Lingkungan Hidup dan Kehutanan Kutai Kartanegara.
          </p>
          <Button onClick={navigateToLapor} color="primary">
            Lapor
          </Button>
        </div>
        <img src={statIcon} alt="" />
      </section>

      <section className="my-16 gap-8 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">Layanan Kami</h3>
        <Layanan />
        <Layanan />
      </section>
    </main>
  );
};

export default Home;
