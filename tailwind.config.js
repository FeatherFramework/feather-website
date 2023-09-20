module.exports = {
  content: ["./docs/.vitepress/**/*.{js,ts,vue}", "./docs/**/*.md"],
  theme: {
    extend: {
      colors: {
        "color-scheme": "dark",
        primary: "#3eb5d9",
        secondary: "#2b7d96",
        accent: "#3eb5d9",
        neutral: "#57534e",
        info: "#8BE9FD",
        success: "#50FA7B",
        warning: "#F1FA8C",
        error: "#FF5555",
        "base-100": "#202127",
        "base-200": "#242933",
        "base-300": "#20252E",
        "base-content": "#A6ADBB",
        white: "#fff",
      },
    },
  },
};
