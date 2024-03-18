export default function sitemap() {
    return [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url:  `${process.env.NEXT_PUBLIC_BASE_URL}/activities`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url:  `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }