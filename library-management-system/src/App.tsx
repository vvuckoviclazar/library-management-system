import "./index.css";
import { FcReading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import Btn from "./btn.tsx";
import Card from "./card.tsx";
import BooksLi from "./bookLi.tsx";
import { useState } from "react";
import booksData from "./booksData";
import MembersLi from "./membersLi.tsx";
import membersData from "./membersData.tsx";

type View = "dashboard" | "books" | "members";

function App() {
  const [view, setView] = useState<View>("dashboard");
  const [books, setBooks] = useState<Book[]>(booksData);
  const [members, setMembers] = useState<Member[]>(membersData);

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
          <Btn className="link-btn" onClick={() => setView("dashboard")}>
            <MdDashboard size={22} /> DASHBOARD
          </Btn>
          <Btn className="link-btn" onClick={() => setView("books")}>
            <IoBookSharp size={22} /> BOOKS
          </Btn>
          <Btn className="link-btn" onClick={() => setView("members")}>
            <FaPeopleGroup size={22} /> MEMBERS
          </Btn>
        </div>
      </section>
      {view === "dashboard" ? (
        <section className="dashboard">
          <h1 className="dashboard-h1">Dashboard</h1>
          <div className="options-div">
            <Card
              option="MEMBERS"
              btnOption="members"
              icon={<FaPeopleGroup size={35} />}
              variation="orange"
              lenght={4}
              onClick={() => setView("members")}
            />
            <Card
              option="BOOKS"
              btnOption="books"
              icon={<IoBookSharp size={35} />}
              variation="purple"
              lenght={books.length}
              onClick={() => setView("books")}
            />
          </div>
        </section>
      ) : (
        <ul>
          {view === "books" &&
            books.map((book) => (
              <BooksLi
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                status={book.status}
              />
            ))}

          {view === "members" &&
            members.map((member) => (
              <MembersLi
                key={member.id}
                id={member.id}
                name={member.name}
                phone={member.phone}
                email={member.email}
                fine={member.fine}
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default App;
