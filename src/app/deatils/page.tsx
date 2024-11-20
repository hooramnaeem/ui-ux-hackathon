// src/app/details/page.tsx

"use client";

const DetailsPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
    <h1 className="text-4xl font-bold text-blue-400 mb-8">Professional Details</h1>
    <ul className="list-disc list-inside text-gray-300 text-lg">
      <li>Proficient in Full-Stack Development.</li>
      <li>Skilled in HTML, TypeScript, React, Next.js, FastAPI, and Tailwind CSS.</li>
      <li>Experience with database systems like PostgreSQL and MongoDB.</li>
      <li>Certified in [Add any certifications here].</li>
    </ul>
  </div>
);

export default DetailsPage;

