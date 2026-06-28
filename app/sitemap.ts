export default function sitemap() {
  return [
    {
      url: 'https://www.solvexagroup.co',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
