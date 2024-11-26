// src/components/WorkExperience.js
import React from "react";
import { Box, Typography } from "@mui/material";

const WorkExperience = ({ workExperience }) => {
  return (
    <Box className="Experience" sx={{ width: "90%" }}>
      <Typography variant="h6" sx={{backgroundColor:"lightgray"}}>Work Experience</Typography>
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
            <>
            <Box key={index}>
             <Typography sx={{color:"black"}}>Company: {exp.company}</Typography>
             <Typography sx={{color:"black"}}>Role: {exp.role}</Typography>
             <Typography sx={{color:"black"}}>Duration: {exp.duration}</Typography>
             <Typography sx={{color:"black"}}>Achievements: {exp.achievements}</Typography>
            </Box>
            <br />
            </>
          ))
      ) : (
       <Typography sx={{color:"black"}}>No work experience details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default WorkExperience;
