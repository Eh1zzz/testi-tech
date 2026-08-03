import { BIZ } from '@/lib/data';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BIZ.url}/sitemap.xml`,
  };
}
