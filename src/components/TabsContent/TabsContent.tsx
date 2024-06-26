import { IconButton, Tooltip } from "@mui/material";
import CustomTabPanel from "../CustomTabPanel/CustomTabPanel";

import styles from "./TabsContent.module.scss";
import VacationTable from "../VacationTable/VacationTable";

interface ITabsContent {
  value: number;
}

const TabsContent: React.FC<ITabsContent> = (props) => {
  const { value } = props;
  return (
    <div className="mt-4">
      <CustomTabPanel value={value} index={0}>
        Основная информация
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col 1100:flex-row gap-[1.125rem]">
          <div className={`${styles["tab-content-item"]} 1100:shrink-0 1100:grow-0 1100:basis-[38%]`}>
            <header className="flex items-center gap-2">
              <h5>Статистика</h5>
              <Tooltip
                classes={{ tooltip: "text-sm bg-[#303030] px-3 py-2 text-textMain" }}
                placement="right"
                title="1 раб. месяц = 3 дня отпуска">
                <IconButton>
                  <img src="i.svg" alt="" />
                </IconButton>
              </Tooltip>
            </header>
          </div>
          <div className={`${styles["tab-content-item"]} 1100:basis-full`}>
            <header className="flex justify-between items-center">
              <h5>История отпусков</h5>
              <button className="text-sm text-mainGray">Посмотреть все</button>
            </header>
            <VacationTable className="mt-4" />
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Оборудование
      </CustomTabPanel>
    </div>
  );
};

export default TabsContent;
