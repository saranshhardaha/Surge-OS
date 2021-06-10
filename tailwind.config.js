module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "img-1": "url('/public/images/bg-1.jpg')",
      }),
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
