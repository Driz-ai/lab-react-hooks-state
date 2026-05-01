// import React from 'react'

// const DarkModeToggle = () => {
//   // TODO: Implement dark mode toggle logic

//   return (
//     <button>Toggle Dark Mode {/* TODO: Update this text from Dark to Light dynamically */}</button>
//   )
// }

// export default DarkModeToggle



import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      data-testid="dark-mode-toggle"
    >
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
