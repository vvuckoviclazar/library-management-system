import "./index.css";
import { FcReading } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import Btn from "./btn.tsx";
import Card from "./card.tsx";
import Li from "./Li.tsx";
import { useState, useEffect } from "react";

type View = "dashboard" | "books" | "members";

type Book = {
  id: string;
  title: string;
  author: string;
  status: string;
};

function App() {
  const [view, setView] = useState<View>("dashboard");
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(
          "https://firestore.googleapis.com/v1/projects/library-management-syste-6f973/databases/(default)/documents/books"
        );

        const data = await res.json();

        const booksData: Book[] = (data.documents ?? []).map((doc: any) => {
          const id = (doc.name as string)?.split("/").pop() ?? "";
          const f = doc.fields ?? {};
          return {
            id,
            title: f.title?.stringValue ?? "",
            author: f.author?.stringValue ?? "",
            status: f.status?.stringValue ?? "",
          };
        });

        setBooks(booksData);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    }
    fetchBooks();
  }, []);

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
              <Li
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                status={book.status}
              />
            ))}

          {view === "members" && <Li title="Members" />}
        </ul>
      )}
    </>
  );
}

export default App;

// react router, set up poslednje verzije
