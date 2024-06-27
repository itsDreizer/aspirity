import React from "react";
import LongArrow from "../UI/LongArrow/LongArrow";

interface IVacationTableMobileProps {
  className: string;
}

const VacationTableMobile: React.FC<IVacationTableMobileProps> = ({ className = "" }) => {
  const createData = (() => {
    let id = 0;
    return (type: string, dates: { from: string; to: string }, countOfDays: number, used: boolean) => {
      return { type, dates, countOfDays, id: ++id, used };
    };
  })();

  const vacations = [
    createData("Отпуск", { from: "03 марта 2023", to: "23 марта 2023" }, 20, false),
    createData("Отгул", { from: "03 марта 2023", to: "7 марта 2023" }, 4, true),
    createData("Отгул", { from: "03 марта 2023", to: "7 марта 2023" }, 4, true),
    createData("Отгул", { from: "03 марта 2023", to: "7 марта 2023" }, 4, true),
    createData("Отгул", { from: "03 марта 2023", to: "7 марта 2023" }, 4, true),
  ];
  return (
    <div className={`${className}`}>
      {vacations.map((vacation) => {
        return (
          <div key={vacation.id} className="border-b border-[#363738] last:border-0 py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-mainGray">Тип</div>
              <div className="">{vacation.type}</div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-mainGray">Даты отпуска</div>
              <div className="inline-flex items-center gap-2 whitespace-nowrap">
                {vacation.dates.from} <LongArrow color={vacation.used ? "red" : "yellow"} />
                {vacation.dates.to}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-mainGray">Количество дней</div>
              <div className="">{vacation.countOfDays}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VacationTableMobile;
