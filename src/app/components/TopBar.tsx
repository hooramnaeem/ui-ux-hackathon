'use client';

import { useState } from "react";

function TopBar() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Localization logic can be added here in the future
  };

  return (
    <div className="w-full bg-black text-white text-sm py-2 flex justify-center items-center px-5">
      {/* Centered Announcement */}
      <p className="flex-1 text-center">
        <strong>Summer Sale - OFF 50%!</strong> Summer Sale For All Swim Suits
        And Free Express Delivery - OFF 50%!{" "}
        <button className="underline font-bold">Shop Now</button>
      </p>

      {/* Centered Language Selector */}
      <div className="flex items-center gap-0 mx-2 py-2 px-9">
        <label htmlFor="language-select" className="hidden sm:block"></label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          className="bg-black text-white"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
    </div>
  );
}

export default TopBar;