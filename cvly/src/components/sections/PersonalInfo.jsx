// src/components/PersonalInfo.js
import React from "react";
import { Box, Typography } from "@mui/material";

const PersonalInfo = ({ personalInfo }) => {
  return (
    <Box sx={{ width: "90%", textAlign: "center" }}>
      {personalInfo.name.trim() ||
      personalInfo.email.trim() ||
      personalInfo.phone.trim() ||
      personalInfo.linkedin.trim() ||
      personalInfo.github.trim() ? (
        <>
          <Typography variant="h3" sx={{backgroundColor:"lightgray"}}>{personalInfo.name}</Typography>
          <Box sx={{ display: "flex" }}>
           <Typography sx={{color:"black"}}>{personalInfo.email} | </Typography>
           <Typography sx={{color:"black"}}>Phone: {personalInfo.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
           <Typography sx={{color:"black"}}>LinkedIn: {personalInfo.linkedin} | </Typography>
           <Typography sx={{color:"black"}}>GitHub: {personalInfo.github}</Typography>
          </Box>
        </>
      ) : (
       <Typography sx={{color:"black"}}>No personal details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default PersonalInfo;
