/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "fr", "es", "ar", "en", "it", "de", "nl"],
    defaultLocale: "default",
    localeDetection: false,
  },
};
