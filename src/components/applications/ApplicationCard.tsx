import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRightIcon } from 'lucide-react';
import type { Application } from '../../types';

interface ApplicationCardProps {
  application: Application;
}

export function ApplicationCard({ application }: ApplicationCardProps) {
  const Icon =
  (Icons as unknown as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[
  application.icon] ??
  Icons.CircleDot;

  return (
    <Link
      to={`/applications/${application.slug}`}
      className="group flex h-full flex-col rounded-xl border border-steel-100 bg-white p-5 shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
      
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-lg font-extrabold text-navy">{application.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-steel-600">{application.summary}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-bold uppercase tracking-[0.1em] text-brand-600">
        View application
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
          aria-hidden />
        
      </span>
    </Link>);

}