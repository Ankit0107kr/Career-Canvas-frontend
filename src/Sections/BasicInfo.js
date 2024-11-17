import React from 'react';
import '../Styles/SectionStyles/BasicInfo.css';

const BasicInfo = ({ formInput, handleChange }) => (
  <div className="basic-info-form">
    <div className="form-group">
      <label>Name</label>
      <input type="text" name="name" value={formInput.name} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Role</label>
      <input type="text" name="role" value={formInput.role} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Email</label>
      <input type="email" name="email" value={formInput.email} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>Phone</label>
      <input type="text" name="phone" value={formInput.phone} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>LinkedIn Profile URL</label>
      <input type="text" name="linkedin" value={formInput.linkedin} onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>GitHub Profile URL</label>
      <input type="text" name="github" value={formInput.github} onChange={handleChange} />
    </div>
  </div>
);

export default BasicInfo;
