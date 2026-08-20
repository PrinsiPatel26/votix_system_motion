import type { Resource } from '../types';

/** Tracking-ready hook for future analytics or backend download events. */
export function handleResourceDownload(resource: Resource) {
  // Add analytics or backend tracking here when the measurement plan is ready.
  return resource;
}

export function resourceActionLabel(resource: Resource) {
  if (resource.type === 'Video') return 'Watch Video';
  if (resource.type === 'News') return 'Read Article';
  if (resource.file) {
    if (resource.type === 'Brochure') return 'View Brochure';
    if (resource.type === 'Case Study') return 'View Case Study';
    return 'View Document';
  }
  return 'View Details';
}
