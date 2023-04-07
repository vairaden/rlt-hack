/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0450F2",
          secondary: "#66e28d",
          accent: "#ef04e7",
          neutral: "#0450F2",
          "base-100": "#FFF",
          info: "#AAD9E9",
          success: "#1F7A5D",
          warning: "#FBC628",
          error: "#EE4466",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
