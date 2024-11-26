import { Box, Typography } from "@mui/material";
import { Radio, FormControlLabel, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import { useDetails } from "../context/DetailsContext";
import { useFormatter } from "../context/FormatterContext";
import Button from "@mui/material/Button";

const Preview = () => {
  const [alignment, setAlignment] = useState("center");
  const { formatterString, updateFormatter} = useFormatter();
  const {
    personalInfo,
    setPersonalInfo,
    education,
    setEducation,
    workExperience,
    setWorkExperience,
    skills,
    setSkills,
    projects,
    setProjects,
    addEducation,
    addWorkExperience,
    addProject,
  } = useDetails();

  const handleAlignmentChange = (event) => {
    setAlignment(event.target.value);
  };
  return (
    <Box>
      <Typography variant="h6" color="secondary.light">
        Preview Resume
      </Typography>
      <br />
     

      <Typography>First Format</Typography>

      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
        className="FirstFormat"
      >
        {/* Details */}
        <Box
          className="Details"
          sx={{ width: "90%", textAlign: { alignment } }}
        >
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

        <br />

        {/* Skills */}
        <Box className="Skills" sx={{ width: "90%" }}>
          <Typography variant="h6">Skills</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Typography key={index}>{skill}, </Typography>
              ))
            ) : (
              <Typography>No skills added. Please add.</Typography>
            )}
          </Box>
        </Box>

        <br />

            {/* Projects */}
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
        <br />

  {/* Work Experience */}
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
            <Typography>
              No work experience details available. Please add.
            </Typography>
          )}
        </Box>

        <br />
        {/* Education */}
        <Box className="Education" sx={{ width: "90%" }}>
          <Typography variant="h6">Education</Typography>
          {education.some(
            (edu) =>
              edu.institution.trim() &&
              edu.degree.trim() &&
              edu.yearOfPassing.trim()
          ) ? (
            education
              .filter(
                (edu) =>
                  edu.institution.trim() &&
                  edu.degree.trim() &&
                  edu.yearOfPassing.trim()
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

        <br />


    
      </Box>
      <br />
      <Button variant="contained" onClick={()=> updateFormatter("first")}>Select This</Button>
      <br />
      <br/>

      <Typography>Second Format</Typography>

      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
        className="Second Format"
      >
        {/* Details */}
        <Box
          className="Details"
          sx={{ width: "90%", textAlign: { alignment } }}
        >
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

        <br />

        {/* Skills */}
        <Box className="Skills" sx={{ width: "90%" }}>
          <Typography variant="h6">Skills</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Typography key={index}>{skill}, </Typography>
              ))
            ) : (
              <Typography>No skills added. Please add.</Typography>
            )}
          </Box>
        </Box>

        <br />

          {/* Work Experience */}
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
            <Typography>
              No work experience details available. Please add.
            </Typography>
          )}
        </Box>

        <br />

        {/* Projects */}
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
          <br />
        </Box>

        {/* Education */}
        <Box className="Education" sx={{ width: "90%" }}>
          <Typography variant="h6">Education</Typography>
          {education.some(
            (edu) =>
              edu.institution.trim() &&
              edu.degree.trim() &&
              edu.yearOfPassing.trim()
          ) ? (
            education
              .filter(
                (edu) =>
                  edu.institution.trim() &&
                  edu.degree.trim() &&
                  edu.yearOfPassing.trim()
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

        <br />

      

        
      </Box>
      <br />
      <Button variant="contained" onClick={()=> updateFormatter("second")}>Select This</Button>
      <br />
      <br/>

      <Typography>Third Format</Typography>

      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
        className="ThirdFormat"
      >
        {/* Details */}
        <Box
          className="Details"
          sx={{ width: "90%", textAlign: { alignment } }}
        >
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

        <br />

        {/* Skills */}
        <Box className="Skills" sx={{ width: "90%" }}>
          <Typography variant="h6">Skills</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Typography key={index}>{skill}, </Typography>
              ))
            ) : (
              <Typography>No skills added. Please add.</Typography>
            )}
          </Box>
        </Box>

        <br />

        {/* Education */}
        <Box className="Education" sx={{ width: "90%" }}>
          <Typography variant="h6">Education</Typography>
          {education.some(
            (edu) =>
              edu.institution.trim() &&
              edu.degree.trim() &&
              edu.yearOfPassing.trim()
          ) ? (
            education
              .filter(
                (edu) =>
                  edu.institution.trim() &&
                  edu.degree.trim() &&
                  edu.yearOfPassing.trim()
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

        <br />

        {/* Work Experience */}
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
            <Typography>
              No work experience details available. Please add.
            </Typography>
          )}
        </Box>

        <br />

        {/* Projects */}
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
          <br />
        </Box>
      </Box>
      <br />
      <Button variant="contained" onClick={()=> updateFormatter("third")}>Select This</Button>
      <br />
      <br/>

      <Typography>Forth Format</Typography>

      <Box
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
        className="secondFormat"
      >
        {/* Details */}
        <Box
          className="Details"
          sx={{ width: "90%", textAlign: { alignment } }}
        >
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

        <br />

        {/* Skills */}
        <Box className="Skills" sx={{ width: "90%" }}>
          <Typography variant="h6">Skills</Typography>
          <Box sx={{ display: "flex" }}>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <Typography key={index}>{skill}, </Typography>
              ))
            ) : (
              <Typography>No skills added. Please add.</Typography>
            )}
          </Box>
        </Box>

        <br />

        {/* Education */}
        <Box className="Education" sx={{ width: "90%" }}>
          <Typography variant="h6">Education</Typography>
          {education.some(
            (edu) =>
              edu.institution.trim() &&
              edu.degree.trim() &&
              edu.yearOfPassing.trim()
          ) ? (
            education
              .filter(
                (edu) =>
                  edu.institution.trim() &&
                  edu.degree.trim() &&
                  edu.yearOfPassing.trim()
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

        <br />

  {/* Projects */}
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
          <br />
        </Box>
        {/* Work Experience */}
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
            <Typography>
              No work experience details available. Please add.
            </Typography>
          )}
        </Box>

        <br />

      
      </Box>
      <br />
      <Button variant="contained" onClick={()=> updateFormatter("forth")}>Select This</Button>
      <br />
      <br/>
      <br />
    </Box>
  );
};

export default Preview;
