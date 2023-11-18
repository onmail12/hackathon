import statIcon from "../assets/icon_stat.png";
import limbah1Img from "../assets/img.jpg";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import LayoutUser from "../Layouts/LayoutUser";

const Home = () => {
  const navigate = useNavigate();

  const navigateToLapor = () => {
    navigate("/lapor");
  };

  return (
    <LayoutUser>
      <section className="flex justify-center items-center mt-32 max-md:flex-col mx-4 ">
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
        <article className="bg-white rounded-md flex items-center w-3/4 gap-6 p-8 max-md:flex-col">
          <img src={limbah1Img} className="w-64 aspect-[4/3] rounded-lg "></img>
          <div>
            <h4 className="font-bold text-lg">
              Pelaporan pembuangan Limbah B3 yang tidak pada tempatnya
            </h4>
            <p className="my-2">
              Masyarakat dapat melaporkan secara langsung yang nantinya akan di
              verifikasi oleh admin Web untuk selanjutnya akan dilakukan tindak
              lanjut oleh tim khusus dari Dinas Lingkungan Hidup Kutai
              Kartanegara.
            </p>
            <Button onClick={navigateToLapor} color="primary">
              Lapor sekarang
            </Button>
          </div>
        </article>

        <article className="bg-white rounded-md flex items-center w-3/4 gap-6 p-8 max-md:flex-col">
          <img src={limbah1Img} className="w-64 aspect-[4/3] rounded-lg "></img>
          <div>
            <h4 className="font-bold text-lg">
              Pengajuan perijinan untuk melakukan pembuangan Limbah B3
            </h4>
            <p className="my-2">
              Perusahaan atau instansi terkait yang ingin melakukan pembuangan
              limbah dapat melakukan pengajuan melalui Website ini yang akan
              ditinjau oleh verifikator dari Dinas Lingkungan Hidup Kutai
              Kartanegara.
            </p>
            <Button onClick={navigateToLapor} color="primary">
              Ajukan sekarang
            </Button>
          </div>
        </article>
      </section>
    </LayoutUser>
  );
};

export default Home;
