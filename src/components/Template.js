import React from 'react';
import '../Styles/Template.css';

const Template = ({ name, role, email, phone, linkedin, github, experiences, education, skills, projects }) => {
  return (
    <div className="resume-template">
      {/* Personal Details */}
      <header className="resume-header">
        <h1 className="resume-name">{name || 'John Doe'}</h1>
        <p className="resume-role">{role || 'Software Developer'}</p>
        <p className="resume-contact">
          {email || 'email'} | {phone || 'phone'} | <a href={linkedin}>LinkedIn</a> | <a href={github}>GitHub</a>
        </p>
      </header>

      {/* Education Section */}
      <section className="resume-section">
        <h2>Education</h2>
        {education &&
          education.map((edu, index) => (
            <div className="resume-item" key={index}>
              <p>
                <strong>Institution:</strong> {edu.institution || 'Harcourt Butler Technical University'}
              </p>
              <p>
                <strong>Degree:</strong> {edu.degree || 'Bachelor of Technology'}
              </p>
              <p>
                <strong>Percentage / CGPA:</strong> {edu.percentage || '7.7'}
              </p>
              <span className="right-align">{edu.graduationYear || '2025'}</span>
            </div>
          ))}
      </section>

      {/* Skills Section */}
      <section className="resume-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills && skills.map((skill, index) => <li key={index}>{skill.trim()}</li>)}
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="resume-section">
        <h2>Experience</h2>
        {experiences &&
          experiences.map((exp, index) => (
            <div className="resume-item" key={index}>
              <p>
                <strong>Company Name:</strong> {exp.company || 'Company Name'}
              </p>
              <p>
                <strong>Role:</strong> {exp.role || 'Role'}
              </p>
              <p>
                <strong>Job Description:</strong> {exp.description || 'Job Description'}
              </p>
              <span className="right-align">{exp.duration || '2 months'}</span>
            </div>
          ))}
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2>Projects</h2>
        {projects &&
          projects.map((prj, index) => (
            <div className="resume-item" key={index}>
              <h3 className="project-name">
                {prj.name || 'E-commerce App'} <span className="project-skills">{prj.skills || 'React.js,Node.js,Express.js,MongoDB'}</span>
              </h3>
              <p>
                <strong>Description:</strong> {prj.description || 'lorem20ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo in ipsum commodo tincidunt. Integer vel'}
              </p>
              {prj.link && (
                <p>
                  <strong>Live Link:</strong> <a href={prj.link}>{prj.link || 'ecommerce.vercel.com'}</a>
                </p>
              )}
            </div>
          ))}
      </section>
    </div>
  );
};

export default Template;
