import {
    Typography,
    TextField,
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Checkbox,
    ListItemText,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import { useDetails } from "../context/DetailsContext"
  
  const Details = () => {
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
    } = useDetails(); // Access context data and functions
  
    const skillOptions = [
        "JavaScript",
        "React",
        "Node.js",
        "Python",
        "CSS",
        "HTML",
      ];
    return (
      <div>
        <Typography variant="h6" color="primary.main">
          Your Details
        </Typography>
        <Box>
          {/* Personal Info Accordion */}
          <Accordion sx={{ backgroundColor: "primary.main", color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Personal Info
            </AccordionSummary>
            <AccordionDetails>
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  value={personalInfo.name}
                  onChange={(e) => setPersonalInfo(e)}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo(e)}
                />
                <TextField
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={(e) => setPersonalInfo(e)}
                />
                <TextField
                  label="LinkedIn"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="linkedin"
                  value={personalInfo.linkedin}
                  onChange={(e) => setPersonalInfo(e)}
                />
                <TextField
                  label="GitHub"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="github"
                  value={personalInfo.github}
                  onChange={(e) => setPersonalInfo(e)}
                />
              </form>
            </AccordionDetails>
          </Accordion>

          <br />
  
          {/* Education Accordion */}
          <Accordion sx={{ backgroundColor: "secondary.light", color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Education
            </AccordionSummary>
            <AccordionDetails>
              {education.map((edu, index) => (
                <div key={index}>
                  <TextField
                    label="Institution"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => setEducation(index, e)}
                  />
                  <TextField
                    label="Degree"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => setEducation(index, e)}
                  />
                  <TextField
                    label="Year of Passing"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="yearOfPassing"
                    value={edu.yearOfPassing}
                    onChange={(e) => setEducation(index, e)}
                  />
                </div>
              ))}
              <Button sx={{ backgroundColor: "white",color:"black" }}onClick={addEducation} variant="outlined">
                Add Education
              </Button>
            </AccordionDetails>
          </Accordion>

          <br />
  
          {/* Work Experience Accordion */}
          <Accordion sx={{ backgroundColor: "third.light", color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Work Experience
            </AccordionSummary>
            <AccordionDetails>
              {workExperience.map((work, index) => (
                <div key={index}>
                  <TextField
                    label="Company"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="company"
                    value={work.company}
                    onChange={(e) => setWorkExperience(index, e)}
                  />
                  <TextField
                    label="Role"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="role"
                    value={work.role}
                    onChange={(e) => setWorkExperience(index, e)}
                  />
                  <TextField
                    label="Duration"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="duration"
                    value={work.duration}
                    onChange={(e) => setWorkExperience(index, e)}
                  />
                  <TextField
                    label="Achievements"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="achievements"
                    value={work.achievements}
                    onChange={(e) => setWorkExperience(index, e)}
                  />
                </div>
              ))}
              <Button sx={{ backgroundColor: "white",color:"black" }} onClick={addWorkExperience} variant="outlined">
                Add Work Experience
              </Button>
            </AccordionDetails>
          </Accordion>
          <br />
  
          {/* Projects Accordion */}
          <Accordion sx={{ backgroundColor: "forth.light", color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Projects
            </AccordionSummary>
            <AccordionDetails>
              {projects.map((project, index) => (
                <div key={index}>
                  <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="title"
                    value={project.title}
                    onChange={(e) => setProjects(index, e)}
                  />
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="description"
                    value={project.description}
                    onChange={(e) => setProjects(index, e)}
                  />
                  <TextField
                    label="Technologies"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="technologies"
                    value={project.technologies}
                    onChange={(e) => setProjects(index, e)}
                  />
                </div>
              ))}
              <Button sx={{ backgroundColor: "white",color:"black" }} onClick={addProject} variant="outlined">
                Add Project
              </Button>
            </AccordionDetails>
          </Accordion>

          <br />
  
          {/* Skills Accordion */}
          <Accordion sx={{ backgroundColor: "fifth.light", color: "white" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Skills
            </AccordionSummary>
            <AccordionDetails>
              <FormControl fullWidth margin="normal">
                <InputLabel>Skills</InputLabel>
                <Select
                  multiple
                  value={skills}
                  onChange={setSkills}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {skillOptions.map((skill, index) => (
                    <MenuItem key={index} value={skill}>
                      <Checkbox checked={skills.indexOf(skill) > -1} />
                      <ListItemText primary={skill} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Button
  onClick={() => {
    console.log("Personal Info:", personalInfo);
    console.log("Education:", education);
    console.log("Work Experience:", workExperience);
    console.log("Skills:", skills);
    console.log("Projects:", projects);
  }}
>
  Submit
</Button>
      </div>
    );
  };
  
  export default Details;
  