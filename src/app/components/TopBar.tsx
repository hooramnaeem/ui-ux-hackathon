'use client';

import { useState } from "react";

function TopBar() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Localization logic can be added here in the future
  };

  return (
    <div className="w-full bg-black text-white text-xs sm:text-sm py-2 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-5">
      {/* Announcement Section */}
      <p className="flex-1 text-center mb-2 sm:mb-0">
        <strong>Summer Sale - OFF 50%!</strong> Summer Sale For All Swim Suits
        And Free Express Delivery - OFF 50%!{" "}
        <button className="underline font-bold">Shop Now</button>
      </p>

      {/* Language Selector */}
      <div className="flex items-center justify-center sm:justify-end gap-0 py-1 px-3 sm:px-9">
        <label htmlFor="language-select" className="hidden sm:block"></label>
        <select
          id="language-select"
          value={language}
          onChange={handleLanguageChange}
          className="bg-black text-white border border-white rounded-sm text-xs sm:text-sm"
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
