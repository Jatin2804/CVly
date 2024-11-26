// src/components/Skills.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Skills = ({ skills }) => {
  return (
    <Box className="Skills" sx={{ width: "90%" }}>
      <Typography variant="h6" sx={{backgroundColor:"lightgray"}}>Skills</Typography>
      <Box sx={{ display: "flex" }}>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <Typography sx={{color:"black"}} key={index}>{skill}, </Typography>
          ))
        ) : (
         <Typography sx={{color:"black"}}>No skills added. Please add.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Skills;
