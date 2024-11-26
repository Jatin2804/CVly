import React, { createContext, useContext, useState } from "react";

// Create context for storing the data
const DetailsContext = createContext();

// Custom hook to use the DetailsContext
export const useDetails = () => {
  return useContext(DetailsContext);
};

// DetailsProvider component to provide context to the app
export const DetailsProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const [education, setEducation] = useState([
    { institution: "", degree: "", yearOfPassing: "" },
  ]);

  const [workExperience, setWorkExperience] = useState([
    { company: "", role: "", duration: "", achievements: "" },
  ]);

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([
    { title: "", description: "", technologies: "" },
  ]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index][name] = value;
    setEducation(newEducation);
  };

  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newWorkExperience = [...workExperience];
    newWorkExperience[index][name] = value;
    setWorkExperience(newWorkExperience);
  };

  const handleProjectsChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...projects];
    newProjects[index][name] = value;
    setProjects(newProjects);
  };

  const handleSkillsChange = (e) => {
    const { value } = e.target;
    setSkills(value);
  };

  const addEducation = () => {
    const lastEntry = education[education.length - 1];
    const isValid =
      lastEntry &&
      lastEntry.institution.trim() !== "" &&
      lastEntry.degree.trim() !== "" &&
      lastEntry.yearOfPassing.trim() !== "";

    if (isValid) {
      setEducation([
        ...education,
        { institution: "", degree: "", yearOfPassing: "" },
      ]);
    }
  };

  const addWorkExperience = () => {
    const lastEntry = workExperience[workExperience.length - 1];
    const isValid =
      lastEntry &&
      lastEntry.company.trim() !== "" &&
      lastEntry.role.trim() !== "" &&
      lastEntry.duration.trim() !== "" &&
      lastEntry.achievements.trim() !== "";

    if (isValid) {
      setWorkExperience([
        ...workExperience,
        { company: "", role: "", duration: "", achievements: "" },
      ]);
    }
  };

  const addProject = () => {
    const lastEntry = projects[projects.length - 1];
    const isValid =
      lastEntry &&
      lastEntry.title.trim() !== "" &&
      lastEntry.description.trim() !== "" &&
      lastEntry.technologies.trim() !== "";

    if (isValid) {
      setProjects([
        ...projects,
        { title: "", description: "", technologies: "" },
      ]);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        personalInfo,
        setPersonalInfo: handlePersonalInfoChange,
        education,
        setEducation: handleEducationChange,
        workExperience,
        setWorkExperience: handleWorkExperienceChange,
        skills,
        setSkills: handleSkillsChange,
        projects,
        setProjects: handleProjectsChange,
        addEducation,
        addWorkExperience,
        addProject,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
