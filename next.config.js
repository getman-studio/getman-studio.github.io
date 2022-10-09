/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true
    },

    async rewrites() {
        return [
            {
                source: '/sculpture',
                destination: '/'
            }
        ]
    }
}

module.exports = nextConfig
