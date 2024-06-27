"use client";
import BackToStuff from "@/components/BackToStuff/BackToStuff";
import { IEmployee } from "@/types";
import { CameraAlt } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTabPanel from "@/components/CustomTabPanel/CustomTabPanel";
import styles from "./page.module.scss";
import { IconButton, Tooltip } from "@mui/material";
import EmployeeTabs from "@/components/EmployeeTabs/EmployeeTabs";
import EmployeeInfo from "@/components/EmpoyeeInfo/EmployeeInfo";
import TabsContent from "@/components/TabsContent/TabsContent";
interface IHomeProps {}

const Home: React.FC<IHomeProps> = (props) => {
  const [value, setValue] = useState<number>(1);
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch("employee.json");
      const data = (await response.json()) as IEmployee;
      setEmployee(data);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <BackToStuff className="ml-4" />
        <div className="mt-3">Загрузка...</div>
      </div>
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="container mt-4 mb-[100px]">
      <BackToStuff className="ml-4" />
      <div className=" bg-bgSecondary rounded-xl pl-4 pr-0 pb-7 pt-8 md:px-10 md:pt-10 md:pb-5 mt-3">
        <EmployeeInfo employee={employee} />
        <EmployeeTabs value={value} handleChange={handleChange} />
      </div>
      <TabsContent value={value} />
    </div>
  );
};

export default Home;
