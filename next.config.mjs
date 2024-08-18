/** @type {import('next').NextConfig} */
const nextConfig = {
  // Extend the Webpack configuration
  webpack: (config) => {
    // Initialize externals if not already defined
    if (!config.externals) {
      config.externals = [];
    }
    // Add packages to the externals list to avoid bundling them
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  
  // Image optimization settings
  images: {
    // Define remote patterns to allow image loading from these domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        // Optional: define port if needed (e.g., port: 443 for HTTPS)
      },
      {
        protocol: 'https',
        hostname: 'crowdfunding.barkprotocol.net',
        // Optional: define port if needed
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com', // Allow images from ucarecdn.com
      },
    ],
    // Optional: specify domains if you want to allow images from specific domains
    // domains: ['ipfs.io', 'crowdfunding.barkprotocol.net', 'ucarecdn.com'],
  },
  
  // Optional: Add other Next.js configurations as needed
  reactStrictMode: true, // Enable React Strict Mode for better development experience
  swcMinify: true,       // Use SWC for faster minification
  poweredByHeader: false // Disable the default "X-Powered-By: Next.js" header
};

export default nextConfig;
