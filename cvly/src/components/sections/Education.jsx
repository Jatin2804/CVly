// src/components/Education.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Education = ({ education }) => {
  return (
    <Box className="Education" sx={{ width: "90%" }}>
      <Typography variant="h6">Education</Typography>
      {education.some(
        (edu) =>
          edu.institution.trim() && edu.degree.trim() && edu.yearOfPassing.trim()
      ) ? (
        education
          .filter(
            (edu) =>
              edu.institution.trim() && edu.degree.trim() && edu.yearOfPassing.trim()
          )
          .map((edu, index) => (
            <Box key={index}>
              <Typography>Institution: {edu.institution}</Typography>
              <Typography>Degree: {edu.degree}</Typography>
              <Typography>Year of Passing: {edu.yearOfPassing}</Typography>
            </Box>
          ))
      ) : (
        <Typography>No education details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default Education;
