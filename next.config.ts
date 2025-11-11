import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    
   typescript: {
        ignoreBuildErrors: true,
    },
    cacheComponents: true,
   images: {
    domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            }
        ]
    },
  /* config options here */
};

export default nextConfig;
