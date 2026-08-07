import type { MetadataRoute } from "next";

const APP_URL = "https://bugnet.vercel.app"; // misma URL que en layout.tsx

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: APP_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${APP_URL}/reports`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];
}