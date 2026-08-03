import { BIZ } from '@/lib/data';

export default function sitemap() {
  return [
    { url: BIZ.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
  ];
}
