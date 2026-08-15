import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  trailingSlash: false,
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
