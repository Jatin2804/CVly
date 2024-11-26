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
          <Typography variant="h6">{personalInfo.name}</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography>{personalInfo.email} | </Typography>
            <Typography>Phone: {personalInfo.phone}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography>LinkedIn: {personalInfo.linkedin} | </Typography>
            <Typography>GitHub: {personalInfo.github}</Typography>
          </Box>
        </>
      ) : (
        <Typography>No personal details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default PersonalInfo;
