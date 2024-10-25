/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",    // Scans your app directory for class names
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",  // If using the pages directory
      "./public/**/*.{html}",           // If using HTML files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  