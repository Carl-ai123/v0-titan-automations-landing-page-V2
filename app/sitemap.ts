import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.titan-automations.com'
  const now = new Date()
  return [
    { url: base,                                          lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${base}/about`,                               lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${base}/services/websites-for-trades`,        lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/lead-generation`,            lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/missed-call-text-back`,      lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/ai-chatbots`,                lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/booking-automation`,         lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/crm-automation`,             lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/follow-up-automation`,       lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/services/review-automation`,          lastModified: now, changeFrequency: 'monthly',  priority: 0.9 },
    { url: `${base}/areas/kent`,                          lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${base}/faq`,                                 lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${base}/privacy`,                             lastModified: now, changeFrequency: 'yearly',   priority: 0.3 },
  ]
}
