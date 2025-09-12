module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4F1E1',      // Light background
        secondary: '#333333',    // Dark text for contrast
        accent: '#9CBA7F',       // Accent color (used for buttons, etc.)
        darkAccent: '#7B9E5B',    // Darker shade for hover effects
        lightBackground: '#FFFFFF', // Pure white background
        linkText: '#0066CC',     // Color for links
        // hoverLink: '#0056A0',    // Darker shade for links on hover
        cartBadge: '#FF0000',    // Cart notification badge
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], // Font family
      },
      boxShadow: {
        light: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Soft shadow
      },
    },
  },
  plugins: [],
};
