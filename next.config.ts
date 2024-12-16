import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY || "default-value",
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
