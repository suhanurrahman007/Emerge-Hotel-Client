import { NavLink } from "react-router-dom";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";

const MainLayout = ({ children }) => {
    const links = (
      <>
        <NavLink
          key={"home"}
          to={`/`}
        >
          Home
        </NavLink>
      </>
    );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div>
          <Navbar></Navbar>
        </div>
        {/* Page content here */}
        {children}
        <div>
          <Footer></Footer>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#0d0d21] text-white p-4 w-60 min-h-full">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;