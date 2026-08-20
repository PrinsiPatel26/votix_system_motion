import React, { useMemo } from 'react';
import { ArrowLeftIcon, CalendarIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { SmartImage } from '../components/ui/SmartImage';
import { Badge } from '../components/ui/Badge';
import { QuoteCTA } from '../components/home/QuoteCTA';
import { ResourceCard } from '../components/resources/ResourceCard';
import { resources } from '../data/resources';
import { usePageMeta } from '../hooks/usePageMeta';
import { handleResourceDownload, resourceActionLabel } from '../utils/resourceActions';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });

export function ResourceDetail() {
  const { slug } = useParams();
  const resource = resources.find((entry) => entry.slug === slug);

  usePageMeta(
    resource ? `${resource.title} | VOTIX Systems` : 'VOTIX Systems | Resource not found',
    resource?.description ?? 'Explore VOTIX Systems engineering resources.'
  );

  const related = useMemo(() => {
    if (!resource) return [];
    const scored = resources
      .filter((entry) => entry.slug !== resource.slug)
      .map((entry) => ({
        entry,
        score: (entry.type === resource.type ? 3 : 0) + entry.keywords.filter((keyword) => resource.keywords.includes(keyword)).length
      }))
      .sort((a, b) => b.score - a.score);
    return scored.slice(0, 3).map(({ entry }) => entry);
  }, [resource]);

  if (!resource) {
    return (
      <section className="py-20 lg:py-28">
        <Container className="text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-600">Resource not found</p>
          <h1 className="mt-4 font-display text-4xl font-black text-navy">This resource is unavailable.</h1>
          <Button to="/resources" variant="primary" className="mt-8">Back to Resources</Button>
        </Container>
      </section>
    );
  }

  const isDocument = !!resource.file;
  const actionLabel = resourceActionLabel(resource);

  return (
    <>
      <section className="relative overflow-hidden border-b border-steel-100 bg-navy-950">
        <div className="pointer-events-none absolute inset-0 votix-grid-fine opacity-50" aria-hidden />
        <Container className="relative py-12 sm:py-16 lg:py-20">
          <Link to="/resources" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-steel-300 transition-colors hover:text-white">
            <ArrowLeftIcon className="h-4 w-4" aria-hidden />
            Back to Resources
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="accent">{resource.type}</Badge>
              <span className="inline-flex items-center gap-1 text-sm text-steel-300"><CalendarIcon className="h-4 w-4" aria-hidden />{formatDate(resource.date)}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{resource.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-200">{resource.description}</p>
          </div>
        </Container>
      </section>

      <main>
        <Container className="py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,.75fr)] lg:items-start">
            <div>
              <SmartImage src={resource.image} alt={`${resource.title} resource image`} ratio="aspect-[16/9]" className="rounded-xl bg-mist" objectFit="cover" priority />
              <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-steel-600">
                {resource.content?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Resource keywords">
                {resource.keywords.map((keyword) => <span key={keyword} className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-steel-600">{keyword}</span>)}
              </div>
            </div>
            <aside className="rounded-xl border border-steel-100 bg-mist p-6">
              <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Resource access</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-navy">{actionLabel}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">Open the resource detail for the engineering overview and related material.</p>
              <div className="mt-6 flex flex-col gap-3">
                {isDocument && <a href={resource.file} target="_blank" rel="noopener noreferrer" onClick={() => handleResourceDownload(resource)} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-brand"><ExternalLinkIcon className="h-4 w-4" aria-hidden />View Document</a>}
                {isDocument && <a href={resource.file} download onClick={() => handleResourceDownload(resource)} className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-md border border-steel-200 bg-white px-5 py-3 text-sm font-semibold text-navy hover:border-brand hover:text-brand"><DownloadIcon className="h-4 w-4" aria-hidden />Download PDF</a>}
                {!isDocument && <Button to="/contact" variant="primary" size="md">Talk to an Engineer</Button>}
              </div>
            </aside>
          </div>
        </Container>
        {related.length > 0 && <section className="border-t border-steel-100 bg-mist py-12 lg:py-16"><Container><h2 className="font-display text-3xl font-extrabold text-navy">Related Resources</h2><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{related.map((entry) => <ResourceCard key={entry.id} resource={entry} />)}</div></Container></section>}
      </main>
      <QuoteCTA title="Need technical assistance?" description="Talk to our engineering team about your mixing duty, equipment selection or process requirements." />
    </>
  );
}
