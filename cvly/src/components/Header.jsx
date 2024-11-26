import { Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import React from "react";
import { useTheme } from "@emotion/react";
import { useDarkmode } from "../context/Darkmode";

const label = { inputProps: { "aria-label": "Dark" } };

const Header = () => {
  const theme = useTheme();
  const {darkMode, toggleMode,setDarkMode } = useDarkmode();
  console.log(darkMode)
  return (
    <Box sx={{display:"flex",alignItems :"center",justifyContent:"space-between"}}>
      <Typography variant="h1" style={{ color: "#1B9BB1" }}>
        CV<span style={{ color: "#EB5777" }}>ly</span>
      </Typography>
      <Box sx={{display:"flex",alignItems :"center"}}>
        <Typography variant="body1" sx={{ color: "#1B9BB1" }}>
          Dark:
        </Typography>
        <Switch sx={{color:"#EB5777"}} checked={darkMode} onChange={() =>  setDarkMode(!darkMode)}  {...label} />
      </Box>
    </Box>
  );
};

export default Header;
