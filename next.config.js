module.exports = {
    images: {
        domains: ['media.graphassets.com']
    },
    async rewrites() {
    return [
      {
        source: "/blog",
        destination: "hhttps://hashnode-starter-kit-henna.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://hashnode-starter-kit-henna.vercel.app/blog/:path*",
      },
    ];
  },
}
