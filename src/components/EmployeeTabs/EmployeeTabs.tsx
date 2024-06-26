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
    <Box sx={{ width: "100%", maxWidth: "500px", marginTop: "3.25rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs classes={{ indicator: styles["tab-indicator"] }} value={value} onChange={handleChange}>
          <Tab
            classes={{ root: styles["tab-root"], selected: styles["tab-selected"] }}
            label="Основная информация"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: styles["tab-root"], selected: styles["tab-selected"] }}
            label="Отпуск"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: styles["tab-root"], selected: styles["tab-selected"] }}
            label="Оборудование"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default EmployeeTabs;
