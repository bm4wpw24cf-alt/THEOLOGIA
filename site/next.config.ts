import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    // Standard 75 + en høyere verdi for tekst-tunge illustrasjoner (infografikk).
    qualities: [75, 90],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
