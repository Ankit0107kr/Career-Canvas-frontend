import React, { useState } from 'react';
import BasicInfo from '../Sections/BasicInfo';
import Education from '../Sections/Education';
import Skills from '../Sections/Skills';
import Experience from '../Sections/Experience';
import Projects from '../Sections/Projects';
import '../Styles/ResumeForm.css';
import axios from 'axios';

const ResumeForm = ({ setFormData }) => {
  const [formInput, setFormInput] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    education: [
      {
        institution: '',
        graduationYear: '',
        degree: '',
        percentage: ''
      }
    ],
    experiences: [
      {
        company: '',
        duration: '',
        role: '',
        description: ''
      }
    ],
    skills: '',
    projects: [
      {
        name: '',
        skills: '',
        description: '',
        link: ''
      }
    ]
  });

  const [step, setStep] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = formInput.education.map((edu, eduIndex) =>
      eduIndex === index ? { ...edu, [name]: value } : edu
    );
    setFormInput({ ...formInput, education: updatedEducation });
  };

  const addEducation = () => {
    setFormInput({
      ...formInput,
      education: [
        ...formInput.education,
        { institution: '', graduationYear: '', degree: '', percentage: '' }
      ]
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = formInput.education.filter((_, eduIndex) => eduIndex !== index);
    setFormInput({ ...formInput, education: updatedEducation });
  };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperiences = formInput.experiences.map((exp, expIndex) =>
      expIndex === index ? { ...exp, [name]: value } : exp
    );
    setFormInput({ ...formInput, experiences: updatedExperiences });
  };

  const addExperience = () => {
    setFormInput({
      ...formInput,
      experiences: [
        ...formInput.experiences,
        { company: '', duration: '', role: '', description: '' }
      ]
    });
  };

  const removeExperience = (index) => {
    const updatedExperiences = formInput.experiences.filter((_, expIndex) => expIndex !== index);
    setFormInput({ ...formInput, experiences: updatedExperiences });
  };

  const handleProjectChange = (e, index) => {
    const { name, value } = e.target;
    const updatedProjects = formInput.projects.map((prj, prjIndex) =>
      prjIndex === index ? { ...prj, [name]: value } : prj
    );
    setFormInput({ ...formInput, projects: updatedProjects });
  };

  const addProject = () => {
    setFormInput({
      ...formInput,
      projects: [
        ...formInput.projects,
        { name: '', skills: '', description: '', link: '' }
      ]
    });
  };

  const removeProject = (index) => {
    const updatedProjects = formInput.projects.filter((_, prjIndex) => prjIndex !== index);
    setFormInput({ ...formInput, projects: updatedProjects });
  };

  const handleNext = () => {
    if (step < sections.length - 1) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { education, experiences, skills, projects, ...basicInfo } = formInput;
    setFormData({
      ...basicInfo,
      education,
      experiences,
      skills: skills.split(',').map(skill => skill.trim()),
      projects
    });
    const resumeData = {
        ...basicInfo,
        education,
        experiences,
        skills: skills.split(',').map(skill => skill.trim()),
        projects
      };
  
      try {
        // Send data to server
        // await axios.post("http://localhost:4000/create-pdf", resumeData);
        await axios.post("https://career-canvas-backend.onrender.com/create-pdf", resumeData);
        console.log("Data successfully sent to the server");
  
        // Optionally update the parent component's state with the form data
        setFormData(resumeData);
      } catch (error) {
        console.error("Error sending data to server:", error);
      }
  };

  const sections = [
    <BasicInfo formInput={formInput} handleChange={handleChange} />,
    <Education
      educationData={formInput.education}
      handleEducationChange={handleEducationChange}
      addEducation={addEducation}
      removeEducation={removeEducation}
    />,
    <Skills formInput={formInput} handleChange={handleChange} />,
    <Experience
      experienceData={formInput.experiences}
      handleExperienceChange={handleExperienceChange}
      addExperience={addExperience}
      removeExperience={removeExperience}
    />,
    <Projects
      projectData={formInput.projects}
      handleProjectChange={handleProjectChange}
      addProject={addProject}
      removeProject={removeProject}
    />
  ];

  return (
    <>
    <form onSubmit={handleSubmit}>
      {sections[step]}

      <div className="navigation-buttons">
        {step > 0 && <button type="button" onClick={handlePrevious} className='prev'>Previous</button>}
        {step < sections.length - 1 && <button type="button" onClick={handleNext} className='next'>Next</button>}
        
      </div>
      <button type="submit" className='save'>Save & Preview</button>
    </form>
    
    </>
  );
};

export default ResumeForm;
