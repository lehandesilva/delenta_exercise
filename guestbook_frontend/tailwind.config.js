// filepath: tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.333333%",
      "1/2": "50%",
      "30px": "580px",
      "3/4": "75%",
      full: "100%",
    },
    extend: {},
  },
  plugins: [],
};
