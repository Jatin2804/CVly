// src/components/Preview.js
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDetails } from "../context/DetailsContext";
import { useFormatter } from "../context/FormatterContext";
import PersonalInfo from "./sections/PersonalInfo";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import WorkExperience from "./sections/Experience";
import Projects from "./sections/Projects";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';

const Resume = () => {
  const [alignment, setAlignment] = useState("center");
  const { formatterString, updateFormatter } = useFormatter();
  const targetRef = useRef();
  const {
    personalInfo,
    education,
    workExperience,
    skills,
    projects,
  } = useDetails();

  const handleAlignmentChange = (event) => {
    setAlignment(event.target.value);
  };

  const renderFormat = (formatType) => {
    // Depending on the format type, return the structure
    switch (formatType) {
      case "first":
        return (
          <>
            {/* Personal Info */}
            <PersonalInfo personalInfo={personalInfo} />
            
            {/* Skills */}
            <Skills skills={skills} />
            
            {/* Projects */}
            <Projects projects={projects} />
            
            {/* Work Experience */}
            <WorkExperience workExperience={workExperience} />
            
            {/* Education */}
            <Education education={education} />
          </>
        );
      case "second":
        return (
          <>
            
            {/* Personal Info */}
            <PersonalInfo personalInfo={personalInfo} />
              {/* Projects */}
              <Projects projects={projects} />
        
            {/* Education First */}
            <Education education={education} />
            
            {/* Work Experience */}
            <WorkExperience workExperience={workExperience} />
            
            {/* Skills */}
            <Skills skills={skills} />
            
            {/* Projects */}
            <Projects projects={projects} />
            
            {/* Personal Info */}
            <PersonalInfo personalInfo={personalInfo} />
          </>
        );
      case "third":
        return (
          <>
          {/* Personal Info */}
          <PersonalInfo personalInfo={personalInfo} />
            {/* Skills */}
            <Skills skills={skills} />
            
            {/* Projects */}
            <Projects projects={projects} />
            
            
            
            {/* Education */}
            <Education education={education} />
            
            {/* Work Experience */}
            <WorkExperience workExperience={workExperience} />
          </>
        );
      // Add more formats as needed
      default:
        return <Typography>No format selected.</Typography>;
    }
  };

  return (
    <Box>
      <Typography variant="h6" color="secondary.light">
        Preview Resume
      </Typography>

      {/* Format Selection */}
      <Typography>Select a format:</Typography>
      <Box>
        <Button variant="contained" onClick={() => updateFormatter("first")}>
          First Format
        </Button>
        <Button variant="contained" onClick={() => updateFormatter("second")}>
          Second Format
        </Button>
        <Button variant="contained" onClick={() => updateFormatter("third")}>
          Third Format
        </Button>
      </Box>

      <Box ref={targetRef} sx={{ backgroundColor: "white", color: "black", border: "2px solid black", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", width: "100%" }}>
        {/* Render the selected format */}
        {renderFormat(formatterString)}
      </Box>
      <Button  variant="contained" onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</Button>
    </Box>
  );
};

export default Resume;
