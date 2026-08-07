import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      // acá van los dominios externos si en algún momento cargan imágenes desde afuera
      // { protocol: "https", hostname: "ejemplo.com" },
    ],
  },
};

export default nextConfig;