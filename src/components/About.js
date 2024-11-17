import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Empowering Your Career Success 🚀
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I'm passionate about empowering individuals to showcase their talents through an exceptional resume. By contributing to your success with my innovative resume builder, I can help you reach new heights in your career journey..
          </p>
        </div>

        <div className="mt-10 ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3  ">
            <div className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0-4h.01M12 16v4m8-8h-3.5a2.5 2.5 0 00-5 0H5v4h1v2h1v2h8v-2h1v-2h1v-4h1v4h1v2h1v-2h1v-4h-1V9h-1v-2h-1v-2H9V5h-.5a2.5 2.5 0 000 5H12" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">My Story</h3>
                  <p className="mt-5 text-base text-gray-500">
                    I am a college student persuing b.tech in Computer Science & Engg.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 ">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6 ">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m-1 16h.01M19 13h-2.5a2.5 2.5 0 00-5 0H5v4h1v2h1v2h8v-2h1v-2h1v-4h1v4h1v2h1v-2h1v-4h-1v-2h-1v-2h-1V9h-1v-2h-1v-2H9V5h-.5a2.5 2.5 0 000 5H12" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Vision</h3>
                  <p className="mt-5 text-base text-gray-500">
                  My vision is to provide a single platform where anyone can build their resume as well as they can analyze that simultaneously using Gemini-AI .
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 ">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0-4h.01M12 16v4m8-8h-3.5a2.5 2.5 0 00-5 0H5v4h1v2h1v2h8v-2h1v-2h1v-4h1v4h1v2h1v-2h1v-4h-1V9h-1v-2h-1v-2H9V5h-.5a2.5 2.5 0 000 5H12" />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Our Mission</h3>
                  <p className="mt-5 text-base text-gray-500">
                    To deliver exceptional services that exceed expectations and create lasting value for our users.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
