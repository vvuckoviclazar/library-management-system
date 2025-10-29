import { GoArrowRight } from "react-icons/go";
import type { ReactNode } from "react";
import Btn from "./btn.tsx";
import { Link } from "react-router-dom";

type CardProps = {
  option: string;
  btnOption: string;
  variation: "purple" | "orange";
  lenght: number;
  icon: ReactNode;
  to: string;
};

function Card({ option, icon, btnOption, variation, lenght, to }: CardProps) {
  const baseClass = "card-span";
  const modifierClass = variation === "purple" ? "purple" : "orange";
  const finalClass = `${baseClass} ${modifierClass}`;

  return (
    <div className="card-div">
      <div className="up-card-div">
        <span className={finalClass}>{icon}</span>
        <div className="card-number-div">
          <p className="card-p">{option}</p>
          <p className="card-number">{lenght}</p>
        </div>
      </div>

      <Link to={to}>
        <Btn className="card-btn">
          See all {btnOption} <GoArrowRight size={30} />
        </Btn>
      </Link>
    </div>
  );
}

export default Card;
