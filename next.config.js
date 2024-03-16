module.exports = {
    images: {
        domains: ['media.graphassets.com']
    },
    async rewrites() {
    return [
      {
        source: "/blog",
        destination: "hhttps://hashnode-starter-kit-henna.vercel.app/blog", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
      {
        source: "/blog/:path*",
        destination: "https://hashnode-starter-kit-henna.vercel.app/blog/:path*", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
    ];
  },
}
