import React from "react";

type BtnProps = {
  children?: React.ReactNode;
  className?: string;

  onClick?: () => void;
};

function Btn({ children, className, onClick }: BtnProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
