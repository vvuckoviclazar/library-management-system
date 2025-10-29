import BooksLi from "../bookLi";
import booksData from "../booksData";
import Btn from "../btn.tsx";

export default function BooksPage() {
  const books = booksData;
  return (
    <section>
      <header className="page-header">
        <h1 className="page-h1">Books</h1>{" "}
        <Btn className="add-new-btn">+ ADD NEW BOOK</Btn>
      </header>
      <ul>
        <li className="books-page-li">
          <p className="books-page-p P">Book ID</p>{" "}
          <p className="books-page-p">Title</p>
          <p className="books-page-p">Author</p>{" "}
          <p className="books-page-p">Status</p>
          <p className="books-page-p">Actions</p>
        </li>
        {books.map((book) => (
          <BooksLi
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            status={book.status}
          />
        ))}
      </ul>
    </section>
  );
}
