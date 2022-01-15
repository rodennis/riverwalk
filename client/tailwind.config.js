module.exports = {
  mode: "jit",
  content: [
    "./src/screens/Home/Home.jsx",
    "./src/components/Nav/Nav.jsx",
    "./src/components/HomeScroll/HomeScroll.jsx",
    "./src/components/Footer/Footer.jsx",
    "./src/screens/Connect/Connect.jsx",
    "./src/screens/Give/Give.jsx",
    "./src/screens/About/About.jsx",
    "./src/components/ConnectForm/ConnectForm.jsx",
    "./src/components/Map/Map.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/photos/homeBackground.jpg')",
      },
    },
    fontFamily: {
      slab: "josefin-slab",
    },
    colors: {
      'nav-back': 'rgb(0, 0, 0, 0.5)'
    }
  },
  plugins: [],
};
