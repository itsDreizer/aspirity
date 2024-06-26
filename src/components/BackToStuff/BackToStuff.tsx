import Link from "next/link";
import React from "react";

interface IBackToStuffProps {
  className?: string;
}

const BackToStuff: React.FC<IBackToStuffProps> = ({ className = "" }) => {
  return (
    <Link className={`${className}  opacity-50 uppercase text-sm font-semibold inline-flex items-center gap-2`} href="/">
      <div className="rotate-90">
        <img src="arrow-down.svg" alt="arrow" />
      </div>
      <div>Вернуться к сотрудникам</div>
    </Link>
  );
};

export default BackToStuff;
