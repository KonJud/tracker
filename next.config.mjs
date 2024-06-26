/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                protocol: "https",
            },
            {
                hostname: "loremflickr.com",
                protocol: "https",
            },
            {
                hostname: "cloudflare-ipfs.com",
                protocol: "https",
            },
        ]
    }
};

export default nextConfig;
