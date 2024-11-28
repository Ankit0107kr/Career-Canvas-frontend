import { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Link} from "react-router-dom";
import "../Styles/ATS.css";

function ATS() {
  const [resumeData, setResumeData] = useState(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_GENERATIVE_LANGUAGE_CLIENT;

  // Move fetchResumeData outside of useEffect to use in multiple places
  async function fetchResumeData() {
    try {
      // const response = await axios.get("http://localhost:4000/resume");
      const response = await axios.get("https://career-canvas-backend.onrender.com/resume");
      setResumeData(response.data);
      // console.log("Resume data fetched:", response.data);
    } catch (error) {
      console.error("Error fetching resume data:", error);
    }
  }

  useEffect(() => {
    fetchResumeData();
  }, []);

  async function generateAnswer() {
    if (!apiKey) {
      console.error("API key is missing");
      setAnswer("API key is missing.");
      return;
    }

    try {
      setLoading(true);
      // Fetch updated resumeData before generating the answer
      await fetchResumeData();

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [{
            parts: [{
              text: JSON.stringify(resumeData) + " Show the name and Find ATS score in percentage and tell about improvements and strong parts of this resume and tell me which type of job I can get with these skills."
            }]
          }]
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function resetAnswer() {
    setAnswer("");
  }

  return (
    <div className=" h-screen flex flex-col justify-center items-center p-6 overflow-hidden">
      <div className="w-full max-w-2xl text-center rounded-lg shadow-xl bg-white dark:bg-gray-800 dark:text-white py-8 px-6 transition-transform duration-500 hover:scale-105 my-4">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 animate-pulse">
          Resume Analyzer
        </h1>
        <button
          onClick={generateAnswer}
          disabled={loading}
          className={`bg-blue-300 dark:bg-blue-500 text-black dark:text-white py-3 px-6 rounded-md hover:bg-blue-500 dark:hover:bg-blue-600 transition-opacity duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? <div className="spinner"></div> : "Analyze Resume"}
        </button>
      </div>
      
      {answer && (
        <div className="w-full text-left mt-6 overflow-y-auto max-h-[50vh] p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500 dark:text-blue-400">
            Review:
          </h2>
          <div className="mt-4">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
        </div>
      )}
      
      {answer && (
        <div className="flex space-x-4 mt-6">
          <button
            onClick={resetAnswer}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-opacity duration-300"
          >
            Reset
          </button>
          <Link to="/dashboard" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-opacity duration-300">
            Analyze Another Resume
          </Link>
        </div>
      )}
    </div>
  );
}

export default ATS;
