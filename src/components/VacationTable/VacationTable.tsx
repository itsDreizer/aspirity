import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LongArrow from "../UI/LongArrow/LongArrow";

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

interface IVacationTableProps {
  className?: string;
}

const VacationTable: React.FC<IVacationTableProps> = ({ className = "" }) => {
  return (
      <table className={`w-full ${className}`}>
        <thead>
          <tr className="border-b border-mainGray h-[56px] ">
            <th className="w-[23.5rem] font-normal text-mainGray pl-2" align="left">
              Тип
            </th>
            <th className="w-[23.5rem] font-normal text-mainGray" align="left">
              Даты отпуска
            </th>
            <th className="w-[10rem] font-normal text-mainGray pr-2 whitespace-nowrap" align="left">
              Количество дней
            </th>
          </tr>
        </thead>
        <tbody>
          {vacations.map((vacation) => {
            return (
              <tr key={vacation.id} className="border-b border-mainGray last:border-0 h-[56px]">
                <td className="pl-2">{vacation.type}</td>
                <td className=" h-full">
                  <div className="inline-flex items-center gap-2 whitespace-nowrap">
                    {vacation.dates.from} <LongArrow color={vacation.used ? "red" : "yellow"} />
                    {vacation.dates.to}
                  </div>
                </td>
                <td className="pr-2" align="right">
                  {vacation.countOfDays}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
   
  );
};

export default VacationTable;
