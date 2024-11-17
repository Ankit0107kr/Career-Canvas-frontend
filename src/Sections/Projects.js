import React from 'react';
import "../Styles/SectionStyles/Projects.css";

const Projects = ({ projectData = [], handleProjectChange, addProject, removeProject }) => {
  return (
    <div className="projects-container">
      <h3>Projects</h3>
      {projectData.map((prj, index) => (
        <div key={index} className="project-entry">
          <label>Project Name</label>
          <input
            type="text"
            name="name"
            value={prj.name}
            onChange={(e) => handleProjectChange(e, index)}
          />
          <label>Skills Used</label>
          <input
            type="text"
            name="skills"
            value={prj.skills}
            onChange={(e) => handleProjectChange(e, index)}
          />
          <label>Project Description</label>
          <input
            type="text"
            name="description"
            value={prj.description}
            onChange={(e) => handleProjectChange(e, index)}
          />
          <label>Project Link</label>
          <input
            type="text"
            name="link"
            value={prj.link}
            onChange={(e) => handleProjectChange(e, index)}
          />
          {projectData.length > 1 && (
            <button type="button" className="remove-button" onClick={() => removeProject(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addProject}>
        Add Project
      </button>
    </div>
  );
};

export default Projects;
