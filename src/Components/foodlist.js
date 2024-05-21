import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

const tabsData = [
  { label: "Premium set" },
  { label: "บุฟเฟ่ต์" },
  { label: "ข้าวเปียก (ก๋วยจั๊บ ญวน)" },
  { label: "เพิ่มเครื่องข้าวเปียก" },
  { label: "โจ๊ก" },
  { label: "วุ้นเส้น" },
  { label: "มาม่า" },
  { label: "เครื่องดื่ม" },
  { label: "ยำ" },
  { label: "ลูกชิ้น" },
  { label: "หมูยอ" },
  { label: "ปากหม้อ" },
  { label: "ปังญวน" },
];

const StyledTab = styled(Tab)({
  fontFamily: "kanit",
  fontWeight: 700,
  letterSpacing: ".1rem",
  color: "black",
  textDecoration: "none",
  backgroundColor: "white",
  borderRadius: "5px",
  padding: "30px 20px",
  width: "70%",
  marginTop: "5%",
  marginLeft: "15%",
  marginBottom: "5%",
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.5)",
  transition: "background-color 0.3s ease, color 0.3s ease",
  "&:hover": {
    backgroundColor: "orange",
    color: "black",
  },
  "&.Mui-selected": {
    backgroundColor: "orange",
    color: "black",
  },
});

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TabList = ({ tabData, selectedTab, handleChange }) => {
  return (
    <>
      {tabData.map((tab, index) => (
        <StyledTab
          key={index}
          label={tab.label}
          {...a11yProps(index)}
          onClick={() => handleChange(index)}
        />
      ))}
    </>
  );
};

const FoodList = () => {
  const [tabValue, setTabValue] = useState("0");
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <TabContext value={tabValue}>
      <TabList
        tabData={tabsData}
        selectedTab={tabValue}
        handleChange={handleChangeTab}
      />
      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={index.toString()}>
          
        </TabPanel>
      ))}
    </TabContext>
  );
};

export default FoodList;
