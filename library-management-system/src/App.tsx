import "./index.css";
import { FcReading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import Btn from "./btn.tsx";
import Card from "./card.tsx";

function App() {
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
          <Btn className="link-btn">
            <MdDashboard size={22} />
            DASHBOARD
          </Btn>
          <Btn className="link-btn">
            <IoBookSharp size={22} />
            BOOKS
          </Btn>
          <Btn className="link-btn">
            <FaPeopleGroup size={22} />
            MEMBERS
          </Btn>
        </div>
      </section>
      <section className="dashboard">
        <h1 className="dashboard-h1">Dashboard</h1>
        <div className="options-div">
          <Card option="BOOKS" />
        </div>
      </section>
    </>
  );
}

export default App;
