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
    "./src/components/Map/Map.jsx",
    "./src/components/Leaders/Leaders.jsx",
    "./src/components/SundayExperience/SundayExperience.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/src/photos/homeBackground.jpg')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1280px',
      },
    },
    fontFamily: {
      slab: "josefin-slab",
      mono: "Ubuntu-Mono",
      satisfy: 'satisfy'
    },
    colors: {
      'nav-back': 'rgb(0, 0, 0, 0.5)',
      'hamburger': 'rgb(95,95,95, 0.8)',
    },
    boxShadow: {
      'contactFormShadow': '0 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)',
      'cardShadow': '2.95px 3.95px 2.6px rgba(0, 0, 0, 0.35)'
    }
  },
  plugins: [],
};
