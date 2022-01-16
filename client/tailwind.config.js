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
      mono: "Ubuntu-Mono",
      satisfy: 'satisfy'
    },
    colors: {
      'nav-back': 'rgb(0, 0, 0, 0.5)',
    },
    boxShadow: {
      'shadow': '0 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)'
    }
  },
  plugins: [],
};
