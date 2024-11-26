// src/components/Projects.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Projects = ({ projects }) => {
  return (
    <Box className="Projects" sx={{ width: "90%" }}>
      <Typography variant="h6">Projects</Typography>
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
            <Box key={index}>
              <Typography>Title: {project.title}</Typography>
              <Typography>Description: {project.description}</Typography>
              <Typography>Technologies: {project.technologies}</Typography>
            </Box>
          ))
      ) : (
        <Typography>No project details available. Please add.</Typography>
      )}
    </Box>
  );
};

export default Projects;
