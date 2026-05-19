export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.28), transparent 28%), radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.16), transparent 30%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 22px rgba(59, 130, 246, 0.28)' },
          '50%': { boxShadow: '0 0 42px rgba(59, 130, 246, 0.42)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
