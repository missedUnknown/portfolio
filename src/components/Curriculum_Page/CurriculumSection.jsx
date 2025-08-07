import { useState } from "react";

const CurriculumSection = ({ title, curriculum }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">{title}</h2>
      {curriculum.map((topic, index) => (
        <div
          key={index}
          className="mb-4 border rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <div
            className="bg-blue-100 px-4 py-3 cursor-pointer flex justify-between items-center hover:bg-blue-200"
            onClick={() => toggleIndex(index)}
          >
            <h3 className="text-lg font-semibold text-gray-800">{topic.title}</h3>
            <span className="text-gray-600 text-sm">
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </div>

          {/* Hover preview */}
          <div
            className="px-4 py-1 text-sm text-gray-500 bg-blue-50 hidden group-hover:block"
          >
            {topic.subtopics.slice(0, 2).join(", ")}{topic.subtopics.length > 2 ? "..." : ""}
          </div>

          {/* Accordion content */}
          {activeIndex === index && (
            <ul className="list-disc pl-6 pr-4 py-3 bg-white text-gray-700">
              {topic.subtopics.map((sub, subIndex) => (
                <li key={subIndex} className="mb-1">
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurriculumSection;
