import React from 'react';
import { SmartImage } from '../ui/SmartImage';
import { Badge } from '../ui/Badge';
import { useQuote } from '../../contexts/QuoteContext';
import type { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { openQuote } = useQuote();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-steel-100 bg-white shadow-card">
      <div className="relative overflow-hidden">
        <SmartImage src={caseStudy.image} alt="" ratio="aspect-[3/2]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <Badge tone="navy">{caseStudy.industry}</Badge>
          <Badge tone="accent">{caseStudy.application}</Badge>
        </div>
        <h3 className="mt-3 font-display text-lg font-extrabold leading-snug text-navy">
          {caseStudy.title}
        </h3>
        <dl className="mt-3 space-y-2 text-sm">
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.1em] text-steel-500">Solution</dt>
            <dd className="mt-0.5 leading-relaxed text-steel-600">{caseStudy.solution}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-[0.1em] text-steel-500">Result</dt>
            <dd className="mt-0.5 leading-relaxed text-steel-600">{caseStudy.result}</dd>
          </div>
        </dl>
        <button
          type="button"
          onClick={() => openQuote({ industry: caseStudy.industry })}
          className="mt-auto inline-flex min-h-[44px] items-center self-start pt-4 text-sm font-bold uppercase tracking-[0.08em] text-brand-600 transition-colors duration-200 ease-smooth hover:text-accent-700">
          
          Discuss a similar project
        </button>
      </div>
    </article>);

}