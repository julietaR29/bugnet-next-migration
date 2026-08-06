import type { MetadataRoute } from "next";

const APP_URL = "https://bugnet.vercel.app"; // misma URL que en layout.tsx

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${APP_URL}/sitemap.xml`,
    };
}