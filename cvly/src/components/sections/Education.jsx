// src/components/Education.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Education = ({ education }) => {
  return (
    <Box className="Education" sx={{ width: "90%" }}>
      <Typography variant="h6" sx={{backgroundColor:"lightgray"}}>Education</Typography>
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
            <>
                        <Box key={index}>
             <Typography sx={{color:"black"}}>Institution: {edu.institution}</Typography>
             <Typography sx={{color:"black"}}>Degree: {edu.degree}</Typography>
             <Typography sx={{color:"black"}}>Year of Passing: {edu.yearOfPassing}</Typography>
            </Box>
    <br />
            </>          ))
      ) : (
       <Typography sx={{color:"black"}}>No education details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default Education;
