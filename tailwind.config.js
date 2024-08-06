/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-stories-desktop': "url('../starter-code/assets/stories/desktop/moon-of-appalacia.jpg')",
        'hero-stories-tablet': "url('../starter-code/assets/stories/tablet/moon-of-appalacia.jpg')",
        'hero-stories-mobile': "url('../starter-code/assets/stories/mobile/moon-of-appalacia.jpg')",

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