// Skills.js
import React from 'react';

const Skills = ({ formInput, handleChange }) => (
  <div>
    <label>Skills (comma-separated)</label>
    <input type="text" name="skills" value={formInput.skills} onChange={handleChange} />
  </div>
);

export default Skills;
