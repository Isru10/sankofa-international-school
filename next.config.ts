import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    // Allows seamless parameter routing on Next.js 16 layouts
    rootParams: true,
  }
};

export default withNextIntl(nextConfig);