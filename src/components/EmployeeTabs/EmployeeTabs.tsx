import { Box, Tabs, Tab } from "@mui/material";
import styles from "./EmployeeTabs.module.scss";

interface IEmployeeTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
  };
}

const EmployeeTabs: React.FC<IEmployeeTabsProps> = (props) => {
  const { handleChange, value } = props;
  return (
    <Tabs
      sx={{
        borderColor: "divider",
      }}
      classes={{
        root: styles["tabs-root"],
        indicator: styles["tab-indicator"],
      }}
      value={value}
      onChange={handleChange}>
      <Tab
        classes={{ root: styles["tab-root"], selected: styles["tab-selected"] }}
        label="Основная информация"
        {...a11yProps(0)}
      />
      <Tab classes={{ root: styles["tab-root"], selected: styles["tab-selected"] }} label="Отпуск" {...a11yProps(1)} />
      <Tab
        classes={{ root: styles["tab-root"], selected: styles["tab-selected"] }}
        label="Оборудование"
        {...a11yProps(2)}
      />
    </Tabs>
  );
};

export default EmployeeTabs;
