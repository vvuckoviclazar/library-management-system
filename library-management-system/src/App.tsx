import "./index.css";
import { FcReading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import Btn from "./btn.tsx";
import Card from "./card.tsx";
import Li from "./Li.tsx";
import { useState } from "react";

function App() {
  const [isBooks, setIsBooks] = useState(false);
  const [isMembers, setIsMembers] = useState(false);

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
          <Btn
            className="link-btn"
            onClick={() => {
              setIsBooks(false);
              setIsMembers(false);
            }}
          >
            <MdDashboard size={22} /> DASHBOARD
          </Btn>
          <Btn
            className="link-btn"
            onClick={() => {
              setIsBooks(true);
              setIsMembers(false);
            }}
          >
            <IoBookSharp size={22} /> BOOKS
          </Btn>
          <Btn
            className="link-btn"
            onClick={() => {
              setIsMembers(true);
              setIsBooks(false);
            }}
          >
            <FaPeopleGroup size={22} /> MEMBERS
          </Btn>
        </div>
      </section>
      {!isBooks && !isMembers ? (
        <section className="dashboard">
          <h1 className="dashboard-h1">Dashboard</h1>
          <div className="options-div">
            <Card
              option="BOOKS"
              icon={<IoBookSharp size={35} />}
              onClick={() => {
                setIsBooks(true);
                setIsMembers(false);
              }}
            />
            <Card
              option="MEMBERS"
              icon={<FaPeopleGroup size={35} />}
              onClick={() => {
                setIsBooks(false);
                setIsMembers(true);
              }}
            />
          </div>
        </section>
      ) : (
        <ul>
          {isBooks && <Li name="Books" />}
          {isMembers && <Li name="Members" />}
        </ul>
      )}
    </>
  );
}

export default App;
