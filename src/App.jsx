import "./App.css";
import NavBar from "./Components/NavBar";
import statIcon from "./assets/icon_stat.png";

function App() {
  return (
    <>
      <NavBar />
      <main className="h-screen bg-[#F5F5DC] flex flex-col items-center gap-32">
        <section className="max-w-4xl flex items-center mt-16 gap-8">
          <div className="">
            <h3 className="text-2xl font-bold">Halo buhan Kukar!</h3>
            <p className="my-4 font-normal">
              Selamat datang di Website Pelaporan dan Monitoring Limbah B3 Dinas
              Lingkungan Hidup dan Kehutanan Kutai Kartanegara.
            </p>
            <a
              href=""
              className="bg-[#004225] text-white px-8 py-2 inline-block rounded-md"
            >
              Lapor
            </a>
          </div>
          <img src={statIcon} alt="" />
        </section>

        <section className="max-w-4xl mt-16 gap-8">
          <h3 className="text-2xl font-bold mb-8">Layanan Kami</h3>
          <div className="bg-white rounded-md w-3/4">das</div>
        </section>
      </main>
    </>
  );
}

export default App;
