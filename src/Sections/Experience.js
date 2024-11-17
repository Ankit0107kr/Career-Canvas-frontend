import React from 'react';
import "../Styles/SectionStyles/Experience.css";

const Experience = ({ experienceData, handleExperienceChange, addExperience, removeExperience }) => {
  return (
    <div className="experience-container">
      <h3>Experience</h3>
      {experienceData.map((exp, index) => (
        <div key={index} className="experience-entry">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(e, index)}
          />

          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={exp.duration}
            onChange={(e) => handleExperienceChange(e, index)}
          />

          <label>Role</label>
          <input
            type="text"
            name="role"
            value={exp.role}
            onChange={(e) => handleExperienceChange(e, index)}
          />

          <label>Job Description</label>
          <input
            type="text"
            name="description"
            value={exp.description}
            onChange={(e) => handleExperienceChange(e, index)}
          />

          {experienceData.length > 1 && (
            <button type="button" className="remove-button" onClick={() => removeExperience(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
