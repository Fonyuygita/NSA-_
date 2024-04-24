export default function sitemap() {
    return [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: "https://nonistudents.vercel.app",
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url:  "https://nonistudents.vercel.app/about",
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url:  "https://nonistudents.vercel.app/activities",
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },

      {
        url:  "https://nonistudents.vercel.app/branches",
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }