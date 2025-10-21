import { GoArrowRight } from "react-icons/go";
import type { ReactNode } from "react";
import Btn from "./btn.tsx";

type CardProps = {
  option: string;
  btnOption: string;
  variation: string;
  lenght: number;
  onClick: () => void;
  icon: ReactNode;
};

function Card({
  option,
  onClick,
  icon,
  btnOption,
  variation,
  lenght,
}: CardProps) {
  const baseClass = "card-span";
  let modifierClass = "";

  if (variation === "purple") {
    modifierClass = "purple";
  } else if (variation === "orange") {
    modifierClass = "orange";
  }

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
      <Btn className="card-btn" onClick={onClick}>
        See all {btnOption} <GoArrowRight size={30} />
      </Btn>
    </div>
  );
}

export default Card;
