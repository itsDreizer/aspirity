import { ClickAwayListener, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { VacationColors } from "@/enums";
import VacationPie from "../VacationPie/VacationPie";
import TabsContentStyles from "@/components/TabsContent/TabsContent.module.scss";

const VacationStatisticsBlock = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [activeDataStringValue, setActiveDataStringValue] = useState<string>("32 дня");
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const chartData = [
    {
      id: "Доступно",
      label: "Доступно сейчас",
      value: 32,
      color: VacationColors.green,
      stringValue: "32 дня",
    },
    {
      id: "Недоступно",
      label: "Использовано/Недоступно",
      value: 4,
      color: VacationColors.red,
      stringValue: "4 дня",
    },
    {
      id: "Запланировано",
      label: "Запланировано",
      value: 8,
      color: VacationColors.yellow,
      stringValue: "8 дней",
    },
  ];

  return (
    <div className={`${TabsContentStyles["tab-content-item"]} 1100:shrink-0 1100:grow-0 1100:basis-[38%]`}>
      <header className="flex items-center gap-2">
        <h5>Статистика</h5>
        <Tooltip
          open={isTooltipOpen}
          onClose={() => {
            setIsTooltipOpen(false);
          }}
          classes={{ tooltip: "text-sm bg-[#303030] px-3 py-2 text-textMain" }}
          placement={window.innerWidth > 450 ? "right" : "top"}
          title="1 раб. месяц = 3 дня отпуска">
          <IconButton
            onClick={() => {
              setIsTooltipOpen(true);
            }}
            onMouseEnter={() => {
              setIsTooltipOpen(true);
            }}
            onMouseLeave={() => {
              setIsTooltipOpen(false);
            }}>
            <img src="i.svg" alt="" />
          </IconButton>
        </Tooltip>
      </header>
      <div className="mx-auto max-w-[180px] h-[180px] relative text-center">
        <VacationPie data={chartData} activeId={activeId} />
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <div className="text-[2.125rem]">{activeDataStringValue.split(" ")[0]}</div>
          <div className="text-mainGray">{activeDataStringValue.split(" ")[1]}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3 text-sm sm:text-base">
        {chartData.map((item) => {
          return (
            <div
              key={item.id}
              className="border border-[#363738] rounded-2xl p-3 cursor-pointer flex items-center hover:border-[#E1E3E6]"
              onMouseLeave={() => setActiveId("")}
              onMouseEnter={() => {
                setActiveId(item.id);
                setActiveDataStringValue(item.stringValue);
              }}>
              <div style={{ background: item.color }} className="mr-2 min-w-2 min-h-2 rounded-full"></div>
              <div className="basis-full">{item.label}</div>
              <div className="whitespace-nowrap">{item.stringValue}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VacationStatisticsBlock;
