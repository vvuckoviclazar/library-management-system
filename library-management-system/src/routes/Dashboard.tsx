import Card from "../card";
import { IoBookSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import booksData from "../booksData";
import membersData from "../membersData";

export default function Dashboard() {
  const books = booksData;
  const members = membersData;

  return (
    <section className="dashboard">
      <h1 className="dashboard-h1">Dashboard</h1>
      <div className="options-div">
        <Card
          option="MEMBERS"
          btnOption="members"
          icon={<FaPeopleGroup size={35} />}
          variation="orange"
          lenght={members.length}
          to="/members"
        />
        <Card
          option="BOOKS"
          btnOption="books"
          icon={<IoBookSharp size={35} />}
          variation="purple"
          lenght={books.length}
          to="/books"
        />
      </div>
    </section>
  );
}
