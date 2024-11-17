import React from 'react';
import "../Styles/SectionStyles/Education.css";

const Education = ({ educationData, handleEducationChange, addEducation, removeEducation }) => {
  return (
    <div className="education-container">
      <h3>Education</h3>
      {educationData.map((edu, index) => (
        <div key={index} className="education-entry">
          <label>Institution Name</label>
          <input
            type="text"
            name="institution"
            value={edu.institution}
            onChange={(e) => handleEducationChange(e, index)}
          />

          <label>Graduation Year</label>
          <input
            type="text"
            name="graduationYear"
            value={edu.graduationYear}
            onChange={(e) => handleEducationChange(e, index)}
          />

          <label>Degree Pursued</label>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleEducationChange(e, index)}
          />

          <label>Percentage / CGPA</label>
          <input
            type="text"
            name="percentage"
            value={edu.percentage}
            onChange={(e) => handleEducationChange(e, index)}
          />

          {educationData.length > 1 && (
            <button type="button" className="remove-button" onClick={() => removeEducation(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addEducation}>
        Add Institution
      </button>
    </div>
  );
};

export default Education;
