module.exports = {
  mode: "jit",
  content: ["./src/screens/Home/Home.jsx", "./src/components/Nav/Nav.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'home-background': "url('/src/photos/homeBackground.jpg')"
      }
    },
  },
  plugins: [],
};
