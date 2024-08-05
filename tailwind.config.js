/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-stories': "url('../starter-code/assets/stories/desktop/moon-of-appalacia.jpg')",

        'hero-features-desktop': "url('../starter-code/assets/features/desktop/hero.jpg')",
        'hero-features-tablet': "url('../starter-code/assets/features/tablet/hero.jpg')",
        'hero-features-mobile': "url('../starter-code/assets/features/mobile/hero.jpg')",

        'hero-pricing-desktop': "url('../starter-code/assets/pricing/desktop/hero.jpg')",
        'hero-pricing-tablet': "url('../starter-code/assets/pricing/tablet/hero.jpg')",
        'hero-pricing-mobile': "url('../starter-code/assets/pricing/mobile/hero.jpg')",

        'bg-beta-desktop': "url('../starter-code/assets/shared/desktop/bg-beta.jpg')",
        'bg-beta-tablet': "url('../starter-code/assets/shared/tablet/bg-beta.jpg')",
        'bg-beta-mobile': "url('../starter-code/assets/shared/mobile/bg-beta.jpg')",
      }
    },
  },
  plugins: [],
}