import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "taxresidencyadvisors.com" }],
        destination: "https://www.taxresidencyadvisors.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
