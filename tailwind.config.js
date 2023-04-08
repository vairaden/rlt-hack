/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0450F2",
        error: "#DB3936",
        textGrey: "#8D93A1",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0450F2",
          secondary: "#6ae28d",
          accent: "#ef04e7",
          neutral: "#0450F2",
          "base-100": "#FAFCFF",
          info: "#8D93A1",
          success: "#1F7A5D",
          warning: "#FBC628",
          error: "#DB3936",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
