// src/components/Projects.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Projects = ({ projects }) => {
  return (
    <Box className="Projects" sx={{ width: "90%" }}>
      <Typography variant="h6" sx={{backgroundColor:"lightgray"}}>Projects</Typography>
      {projects.some(
        (project) =>
          project.title.trim() &&
          project.description.trim() &&
          project.technologies.trim()
      ) ? (
        projects
          .filter(
            (project) =>
              project.title.trim() &&
              project.description.trim() &&
              project.technologies.trim()
          )
          .map((project, index) => (
            <>
             <Box key={index}>
             <Typography sx={{color:"black"}}>Title: {project.title}</Typography>
             <Typography sx={{color:"black"}}>Description: {project.description}</Typography>
             <Typography sx={{color:"black"}}>Technologies: {project.technologies}</Typography>
            </Box>
            <br />
            </>
           
          ))
      ) : (
       <Typography sx={{color:"black"}}>No project details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default Projects;
