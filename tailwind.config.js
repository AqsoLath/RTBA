module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        backgroundImage: {
            'hero': "url('../image/hero.jpg')",
            'hero2': "url('../image/hero2.png')",
            'hero3': "url('../image/foto-bersama1.jpeg')",
        },
        colors: {
            'ungu1': "#3d0066",
            'ungu2': "#5c0099",
            'ungu3': "#c86bfa",
            'ungu4': "#9a01ce",
            'emas1': "#fdc500",
            'emas2': "#ffd500",
            'emas3': "#ffee32",
            'hitam': "#03071e"

        },
        boxShadow: {
            'aku': '1px 1px 1px #333',
        },
        fontFamily: {
            bree: "'Bree Serif', serif",
            inter: "'Inter', sans-serif"
        }
    }
  },
  plugins: [],
}
