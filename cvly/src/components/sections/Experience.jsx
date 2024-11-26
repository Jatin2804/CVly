// src/components/WorkExperience.js
import React from "react";
import { Box, Typography } from "@mui/material";

const WorkExperience = ({ workExperience }) => {
  return (
    <Box className="Experience" sx={{ width: "90%" }}>
      <Typography variant="h6">Work Experience</Typography>
      {workExperience.some(
        (exp) =>
          exp.company.trim() &&
          exp.role.trim() &&
          exp.duration.trim() &&
          exp.achievements.trim()
      ) ? (
        workExperience
          .filter(
            (exp) =>
              exp.company.trim() &&
              exp.role.trim() &&
              exp.duration.trim() &&
              exp.achievements.trim()
          )
          .map((exp, index) => (
            <Box key={index}>
              <Typography>Company: {exp.company}</Typography>
              <Typography>Role: {exp.role}</Typography>
              <Typography>Duration: {exp.duration}</Typography>
              <Typography>Achievements: {exp.achievements}</Typography>
            </Box>
          ))
      ) : (
        <Typography>No work experience details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default WorkExperience;
