import React from 'react';
import { ArrowRightIcon, CalendarIcon, DownloadIcon, ExternalLinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SmartImage } from '../ui/SmartImage';
import { Badge } from '../ui/Badge';
import { handleResourceDownload, resourceActionLabel } from '../../utils/resourceActions';
import type { Resource } from '../../types';

interface ResourceCardProps {
  resource: Resource;
  featured?: boolean;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

export function ResourceCard({ resource, featured = false }: ResourceCardProps) {
  const actionLabel = resourceActionLabel(resource);
  const isDocument = !!resource.file;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-lift">
      <Link to={`/resources/${resource.slug}`} aria-label={`Open ${resource.title}`} className="block overflow-hidden">
        <SmartImage
          src={resource.image}
          alt={`${resource.title} resource thumbnail`}
          ratio={featured ? 'aspect-[16/9]' : 'aspect-[16/9]'}
          className="bg-mist transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
          imgClassName="object-cover"
          objectFit="cover"
          priority={featured} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="brand">{resource.type}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-steel-500">
            <CalendarIcon className="h-3.5 w-3.5" aria-hidden />
            {formatDate(resource.date)}
          </span>
        </div>
        <h2 className="mt-3 font-display text-xl font-extrabold leading-snug text-navy">
          <Link to={`/resources/${resource.slug}`} className="transition-colors hover:text-brand-600">
            {resource.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-steel-600">{resource.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link
            to={`/resources/${resource.slug}`}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand">
            {actionLabel}
            {resource.type === 'Video' || resource.type === 'News' ? <ArrowRightIcon className="h-4 w-4" aria-hidden /> : <ExternalLinkIcon className="h-4 w-4" aria-hidden />}
          </Link>
          {isDocument &&
          <a
            href={resource.file}
            download
            onClick={() => handleResourceDownload(resource)}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-steel-200 px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-brand hover:text-brand"
            aria-label={`Download ${resource.title} PDF`}>
            <DownloadIcon className="h-4 w-4" aria-hidden />
            Download PDF
          </a>}
        </div>
      </div>
    </motion.article>
  );
}
