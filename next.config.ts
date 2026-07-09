

/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  basePath: '/youcareclinica',

  trailingSlash: true,

  images: {
    unoptimized: true,
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "clinicasaudecampinas.com.br",
      },
      {
        protocol: 'https',
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: 'https',
        hostname: "media.gettyimages.com",
      }
    ]
  }
};

export default nextConfig;
