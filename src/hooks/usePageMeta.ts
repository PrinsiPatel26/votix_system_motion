import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { company } from '../data/navigation';

const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://votixsystems.com').replace(/\/$/, '');

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function upsertCanonical(href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.rel = 'canonical';
    document.head.appendChild(tag);
  }
  tag.href = href;
}

function upsertJsonLd(id: string, value: unknown) {
  let tag = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!tag) {
    tag = document.createElement('script');
    tag.id = id;
    tag.type = 'application/ld+json';
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(value);
}

function readableSegment(segment: string) {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/** Sets route-specific title, description, canonical and social metadata. */
export function usePageMeta(title: string, description: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    const url = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    const image = `${siteUrl}/votix%20system%20motion.png`;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', pathname === '/' ? 'website' : 'article');
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', 'VOTIX Systems');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
    upsertCanonical(url);

    upsertJsonLd('votix-organization-schema', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'VOTIX Systems',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/votix.download.png`
      },
      telephone: company.phone,
      email: company.emails[0],
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.addressLines.join(', '),
        addressLocality: 'Vadodara',
        postalCode: '390024',
        addressCountry: 'IN'
      }
    });

    upsertJsonLd('votix-website-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'VOTIX Systems',
      url: siteUrl
    });

    upsertJsonLd('votix-webpage-schema', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      isPartOf: {
        '@type': 'WebSite',
        name: 'VOTIX Systems',
        url: siteUrl
      }
    });

    if (pathname === '/') {
      document.head.querySelector('#votix-breadcrumb-schema')?.remove();
      return;
    }

    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbItems = [
      { name: 'Home', item: `${siteUrl}/` },
      ...segments.map((segment, index) => ({
        name: index === segments.length - 1 ? title.split(' | ')[0] : readableSegment(segment),
        item: `${siteUrl}/${segments.slice(0, index + 1).join('/')}`
      }))
    ];

    upsertJsonLd('votix-breadcrumb-schema', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item
      }))
    });
  }, [pathname, title, description]);
}