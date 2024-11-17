import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Template from './Template';
import ResumeForm from './ResumeForm';
import '../Styles/DashBoard.css'

const DashBoard = () => {
  const TemplateRef = useRef(null); // Moved useRef inside the component function

  const handleGeneratePdf = async () => {
    const input = TemplateRef.current;

    try {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
      });
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF', error);
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    experience: [],
    education: [],
    skills: [],
    projects: []
  });

  return (
    <div className="App">
      

      {/* Resume Form and Template */}
      <div className="container">
        <div className="left">
          <ResumeForm setFormData={setFormData} />
        </div>

        <div className="right" ref={TemplateRef}>
          <Template {...formData} />
        </div>

      </div>
      <div className="container">

      <button className="pdfbtn" onClick={handleGeneratePdf}>
        Generate PDF
      </button>
      <div className="pdfbtn">
        <Link to={'/score'}><button className='ats'>Analyze Resume</button></Link>
      </div>
      </div>
    </div>
  );
};

export default DashBoard;
