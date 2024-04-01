/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kgoazdpjnwigqasganef.supabase.co',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
};
// https://kgoazdpjnwigqasganef.supabase.co/storage/v1/object/public/avatars/7661f93f-cb57-4003-b0e1-41c3df289dd0-0.9860283701618298.png
export default nextConfig;
