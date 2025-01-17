/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the `src` folder for Tailwind usage
  ],
  theme: {
    extend: {
      colors: {
        todo: "#FEE2E2", // Light red for "To Do"
        inprogress: "#FEF3C7", // Light yellow for "In Progress"
        completed: "#D1FAE5", // Light green for "Completed"
        primary: "#3B82F6", // Blue shade for general primary color
        secondary: "#F3F4F6", // Light gray for backgrounds
      },
      borderRadius: {
        xl: "1rem", // Custom large border-radius for cards
      },
    },
  },
  plugins: [],
};
