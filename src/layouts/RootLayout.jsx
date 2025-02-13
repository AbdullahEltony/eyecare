// ** React Router Imports
import { Navigate, Outlet } from "react-router-dom";

// ** Components **
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSidebarToggle } from "../hooks/useSidebarToggle";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useSidebarToggle();

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }
  return (
    // ************ LEFT SIDE **************
    <div className="grid xl:grid-cols-12 w-full 2xl:max-w-[2000px]">
      {/* **** SIDEBAR DRAWER **** */}
      <div
        className={`fixed xl-hidden  ${
          isOpen ? "block" : "hidden"
        } w-full h-full top-0 left-0 bg-black opacity-[0.4] z-[45]`}
      />

      {/* **** SIDEBAR **** */}
      <div
        className={`col-span-2 xl:block xl:relative absolute ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Sidebar />
      </div>

        {/********* RIGHT SIDE***********/}
      <div className={`col-span-10 h-screen overflow-y-auto relative`}>
        <Navbar setIsOpen={setIsOpen} />
        <main className="xs:px-8 px-2 pt-24">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
