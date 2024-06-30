import withPWA from "@ducanh2912/next-pwa";

const pwaConfig = {
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other options you like
};

export default withPWA(pwaConfig)(nextConfig);
