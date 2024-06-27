import { Fade, Modal } from "@mui/material";
import { useState } from "react";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";
import VacationTable from "../VacationTable/VacationTable";

import VacationStatisticsBlock from "../VacationStatisticsBlock/VacationStatisticsBlock";
import VacationTableBlock from "../VacationTableBlock/VacationTableBlock";
import styles from "./TabsContent.module.scss";
import VacationTableMobile from "../VacationTable/VacationTableMobile";

interface ITabsContent {
  value: number;
}

const TabsContent: React.FC<ITabsContent> = (props) => {
  const { value } = props;
  const [isTableModalOpen, setIsTableModalOpen] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <CustomTabPanel value={value} index={0}>
        Основная информация
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col 1100:flex-row gap-[1.125rem]">
          <VacationStatisticsBlock />
          <VacationTableBlock setIsModalOpen={setIsTableModalOpen} />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Оборудование
      </CustomTabPanel>
      <Modal
        className="sm:flex sm:items-center max-w-[1000px] mx-auto p-[15px] overflow-scroll md:overflow-visible"
        onClose={() => setIsTableModalOpen(false)}
        open={isTableModalOpen}>
        <Fade in={isTableModalOpen}>
          <div className={`${styles["tab-content-item"]} w-full`}>
            <header className="flex justify-between items-center">
              <h5>История отпусков</h5>
              <button onClick={() => setIsTableModalOpen(false)} className="text-sm text-mainGray">
                <img src="close.svg" alt="cross" />
              </button>
            </header>
            <VacationTable className="mt-3 hidden sm:table" />
            <VacationTableMobile className="sm:hidden" />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TabsContent;
function useDrawingArea(): { width: any; height: any; left: any; top: any } {
  throw new Error("Function not implemented.");
}
