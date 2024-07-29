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
    eslint: {

        ignoreDuringBuilds: true
    }
};

export default nextConfig;
