import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const navigateToLapor = () => {
    navigate("/lapor");
  };

  return (
    <nav className="flex text-white justify-between items-center bg-[#004225] px-16 py-4 w-full">
      <h3 className="text-2xl font-medium">KUPEDULI</h3>
      <li className="flex items-center gap-8 list-none">
        <a href="" className="hover:text-[#F1C93B] hover:underline py-4">
          Beranda
        </a>
        <a href="" className="hover:text-[#F1C93B] hover:underline py-4">
          Layanan Kami
        </a>
        <a href="" className="hover:text-[#F1C93B] hover:underline py-4">
          Kontak
        </a>
        {/* <a
          className="bg-[#F1C93B] hover:bg-slate-900 px-4 py-2 rounded-md duration-200"
          href=""
        >
          Login Admin
        </a> */}
        <Button
          color="secondary"
          onClick={() => {
            navigateToLapor();
          }}
        >
          Lapor
        </Button>
      </li>
    </nav>
  );
};

export default Nav;
