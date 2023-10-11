/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/programming',
                destination: '/programming/BurtV2',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
