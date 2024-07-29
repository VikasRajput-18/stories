/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'attic.sh',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
