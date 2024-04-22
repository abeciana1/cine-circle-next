/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                host: 'res.cloudinary.com',
                port: '',
                pathname: '/dymmbugh2/**'
            }
        ]
    }
};

export default nextConfig;
