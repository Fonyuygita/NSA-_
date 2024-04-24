
 
export default async function sitemap(){
  const defaultPages = [
    {
      url: "https://nonistudents.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    },
    {
      url: "https://nonistudents.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://nonistudents.vercel.app/activities",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: "https://nonistudents.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },

    {
      url: "https://nonistudents.vercel.app/branches",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    }

    // other pages
  ];
 

 
  const sitemap = [
    ...defaultPages,
    
    
  ];
 
  return sitemap;
}