/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/programming',
                destination: '/programming/Robotics',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
