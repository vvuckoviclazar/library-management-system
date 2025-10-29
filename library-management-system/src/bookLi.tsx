import Btn from "./btn.tsx";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

type BooksLiProps = {
  id: number;
  title: string;
  author: string;
  status: string;
};
function BooksLi({ id, title, author, status }: BooksLiProps) {
  return (
    <li className="books-li">
      <p className="books-p">{id}</p> <p className="books-p">{title}</p>{" "}
      <p className="books-p">{author}</p> <p className="books-p">{status}</p>{" "}
      <div className="li-btn-div">
        <Btn className="edit-books-btn">
          <MdModeEditOutline size={23} />
        </Btn>
        <Btn className="delete-books-btn">
          <MdDelete size={23} />
        </Btn>
      </div>
    </li>
  );
}

export default BooksLi;
