import React from "react";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

function Skills() {
  return (
    <section
      id="skills"
      className="px-4 sm:px-8 md:px-16 lg:px-24 py-24 w-full max-w-screen-xl mx-auto text-white bg-[#28AE60]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left font-medium">
          <div className="hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaCode /> Frontend
            </h3>
            <ul className="list-disc list-inside text-xl">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5, CSS3</li>
            </ul>
          </div>

          <div className="hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaServer /> Backend
            </h3>
            <ul className="list-disc list-inside text-xl">
              <li>FastAPI</li>
              <li>MongoDB / PostgreSQL</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              <FaTools /> Dev Tools
            </h3>
            <ul className="list-disc list-inside text-xl">
              <li>Git & GitHub</li>
              <li>Vite / Webpack</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
