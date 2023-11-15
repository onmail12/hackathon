const Nav = () => {
  return (
    <nav className="flex text-white justify-between items-center bg-[#004225] px-16 py-4">
      <h3 className="text-2xl font-medium">KUPEDULI</h3>
      <li className="flex items-center gap-8 list-none">
        <a href="">Beranda</a>
        <a href="">Layanan Kami</a>
        <a href="">Kontak</a>
        <a className="bg-[#F1C93B] px-4 py-2 rounded-md" href="">
          Login Admin
        </a>
      </li>
    </nav>
  );
};

export default Nav;
