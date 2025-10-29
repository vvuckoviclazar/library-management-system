import "./index.css";
import { FcReading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import Btn from "./btn.tsx";
// POGLEDAJ ZOD VALIDACIJE
// Napravi neku jednostavnu validaciju (npr ime ne sme da bude krace od 3 slova)
// Ispisi erore ispod inputa
import Dashboard from "./routes/Dashboard";
import BooksPage from "./routes/BooksPage";
import MembersPage from "./routes/MembersPage";

export default function App() {
  return (
    <>
      <section className="side-bar">
        <h1 className="h1-lms">
          <span>
            <FcReading size={60} />
          </span>
          LMS
        </h1>

        <div className="links-div">
          <NavLink to="/" end>
            <Btn className="link-btn">
              <MdDashboard size={22} /> DASHBOARD
            </Btn>
          </NavLink>

          <NavLink to="/books">
            <Btn className="link-btn">
              <IoBookSharp size={22} /> BOOKS
            </Btn>
          </NavLink>

          <NavLink to="/members">
            <Btn className="link-btn">
              <FaPeopleGroup size={22} /> MEMBERS
            </Btn>
          </NavLink>
        </div>
      </section>

      <Outlet />

      <Routes>
        <Route path="/" element={<LayoutOnly />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="members" element={<MembersPage />} />
        </Route>
      </Routes>
    </>
  );
}

function LayoutOnly() {
  return <Outlet />;
}
