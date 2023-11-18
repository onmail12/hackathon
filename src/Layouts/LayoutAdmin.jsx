import SideBar from "../Components/SideBar";

const LayoutAdmin = ({ children }) => {
  return (
    <main className="flex">
      <SideBar></SideBar>
      <div className="w-full my-8 mx-8">{children}</div>
    </main>
  );
};

export default LayoutAdmin;
