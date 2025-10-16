import { GoArrowRight } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import Btn from "./btn.tsx";

type CardProps = {
  option?: string;
};

export default function Card({ option }: CardProps) {
  return (
    <div className="card-div">
      <div className="up-card-div">
        <span className="card-span">
          <IoBookSharp size={35} />
        </span>
        <div className="card-number-div">
          <p className="card-p">{option}</p>
          <p className="card-number">10</p>
        </div>
      </div>
      <Btn className="card-btn">
        See all books <GoArrowRight size={30} />
      </Btn>
    </div>
  );
}
