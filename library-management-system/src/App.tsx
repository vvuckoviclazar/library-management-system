import "./index.css";
import { FcReading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";

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
          <h3 className="dashboard-h3">
            <MdDashboard size={22} />
            DASHBOARD
          </h3>
          <h3 className="books-h3">
            <IoBookSharp size={22} />
            BOOKS
          </h3>
          <h3>
            <FaPeopleGroup size={22} />
            MEMBERS
          </h3>
        </div>
      </section>
      <section className="dashboard">
        <h1 className="dashboard-h1">Dashboard</h1>
        <div className="options-div">
          <div className="books-div">
            <div className="up-books-div">
              <span className="books-span">
                <IoBookSharp size={35} />
              </span>
              <div className="books-number-div">
                <p className="books-p">BOOKS</p>
                <p className="books-number">10</p>
              </div>
            </div>
            <button className="books-btn">
              See all books <GoArrowRight size={30} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
