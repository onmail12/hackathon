import footerIcon from "../assets/logo-lhk 1.png";

const Footer = () => {
  return (
    <footer className="bg-[#004225] px-16 py-8 text-white">
      <img src={footerIcon} alt="" />
      <h4 className="font-bold my-2">
        Dinas Lingkungan Hidup dan Kehutanan Kutai Kartanegara
      </h4>
      <p>
        Jl. KH. Akhmad Dahlan, Kel. Sukarame, Kec. Tenggarong, Kab. Kutai
        Kartanegara - KALTIM 75515
      </p>
    </footer>
  );
};

export default Footer;
