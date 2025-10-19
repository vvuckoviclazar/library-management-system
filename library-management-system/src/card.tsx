import { GoArrowRight } from "react-icons/go";
import type { ReactNode } from "react";
import Btn from "./btn.tsx";

type CardProps = {
  option?: string;
  btnOption?: string;
  onClick?: () => void;
  icon?: ReactNode;
};

function Card({ option, onClick, icon, btnOption }: CardProps) {
  return (
    <div className="card-div">
      <div className="up-card-div">
        <span className="card-span">{icon}</span>
        <div className="card-number-div">
          <p className="card-p">{option}</p>
          <p className="card-number">10</p>
        </div>
      </div>
      <Btn className="card-btn" onClick={onClick}>
        See all {btnOption} <GoArrowRight size={30} />
      </Btn>
    </div>
  );
}

export default Card;
