/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.kitsu.io',
				port: '',
				pathname: '/anime/**',
			},
		],
	},
}

module.exports = nextConfig

//(https://media.kitsu.io/anime/poster_images/7442/original.jpg)
