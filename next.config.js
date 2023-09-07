const config = { reactStrictMode: true };
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
  sw: '/sw.js'
});
module.exports = withPWA({});
