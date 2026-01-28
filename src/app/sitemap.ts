import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://areknuteekspertene-web.vercel.app'
  const lastModified = new Date()

  return [
    // Hovedside
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Lokasjoner
    {
      url: `${baseUrl}/oslo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tromso`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Behandlinger
    {
      url: `${baseUrl}/behandlinger/laserbehandling`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/behandlinger/skumbehandling`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/behandlinger/mikroflebektomi`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Tilstander
    {
      url: `${baseUrl}/tilstander/blodpropp-i-bena`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tilstander/hovne-bein`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Symptomer
    {
      url: `${baseUrl}/symptomer/kramper-i-bena`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/symptomer/hovne-bein`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/symptomer/tunge-bein`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/symptomer/synlige-blodarer`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
