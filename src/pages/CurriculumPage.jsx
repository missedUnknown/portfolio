// src/pages/CurriculumPage.jsx

import React from 'react';
import {
  pythonCurriculum,
  javascriptCurriculum,
  reactCurriculum,
  nodeExpressCurriculum,
  mongoDBCurriculum,
  mySqlCurriculum,
  gitGithubCurriculum,
  webScrapingCurriculum,
  digitalMarketingCurriculum
} from '../data/Curriculum';
import CurriculumSection from '../components/Curriculum_Page/CurriculumSection';
import BackToHome from '../components/BackToHome';


const allCurriculumSections = [
  { title: "Python", curriculum: pythonCurriculum },
  { title: "React.js", curriculum: reactCurriculum },
  { title: "Git & GitHub", curriculum: gitGithubCurriculum },
  { title: "JavaScript", curriculum: javascriptCurriculum },
  { title: "Node.js + Express.js", curriculum: nodeExpressCurriculum },
  { title: "MySQL", curriculum: mySqlCurriculum },
  { title: "Web Scraping (Python & JS)", curriculum: webScrapingCurriculum },
  { title: "MongoDB", curriculum: mongoDBCurriculum },
  { title: "Digital Marketing", curriculum: digitalMarketingCurriculum }
];


const CurriculumPage = () => {
  return (
    <div className="min-h-screen min-w-10/12 px-4 py-10 md:px-16">
      <h1 className="text-4xl font-extrabold text-center text-indigo-100 mb-10">📚 Full Curriculum</h1>

      
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-3">
        {allCurriculumSections.map((section, idx) => (
          <div key={idx} className="break-inside-avoid p-4 bg-white shadow rounded-md mb-4">
            <CurriculumSection title={section.title} curriculum={section.curriculum} />
          </div>
        ))}
      </div>
      <BackToHome className="mx-auto" />
    </div>
  );
};
export default CurriculumPage;
