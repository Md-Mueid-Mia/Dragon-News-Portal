import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto font-poppins px-4 md:px-0">
      <header>
        <Header />
        <section className="w-full md:w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-full md:w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="w-full md:w-11/12 mx-auto pt-5 flex flex-col md:grid md:grid-cols-12 gap-4">
        <aside className="w-full md:col-span-3 order-2 md:order-1">
          <LeftNavbar />
        </aside>
        <section className="w-full md:col-span-6 order-1 md:order-2">
          <Outlet />
        </section>
        <aside className="w-full md:col-span-3 order-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
