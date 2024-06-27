import React, { Dispatch, SetStateAction } from "react";
import VacationTable from "../VacationTable/VacationTable";
import TabsContentStyles from "@/components/TabsContent/TabsContent.module.scss";
import VacationTableMobile from "../VacationTable/VacationTableMobile";

interface IVacationTableBlockProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const VacationTableBlock: React.FC<IVacationTableBlockProps> = ({ setIsModalOpen }) => {
  return (
    <div className={`${TabsContentStyles["tab-content-item"]}`}>
      <header className="flex justify-between items-center">
        <h5>История отпусков</h5>
        <button onClick={() => setIsModalOpen(true)} className="text-sm text-mainGray">
          Посмотреть все
        </button>
      </header>
      <VacationTable className="mt-4 hidden sm:table" />
      <VacationTableMobile className="sm:hidden" />
    </div>
  );
};

export default VacationTableBlock;
