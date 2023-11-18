import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const LayoutUser = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="bg-gray-50 flex flex-col ">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutUser;
