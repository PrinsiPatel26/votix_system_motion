import React from 'react';
import { RotateCcwIcon, SearchIcon } from 'lucide-react';
import { productCategories } from '../../data/products';
import { industries } from '../../data/industries';
import { applications } from '../../data/applications';
import { SelectInput } from '../ui/Field';
import { cn } from '../../utils/cn';

export interface ProductFilterState {
  query: string;
  category: string;
  industry: string;
  application: string;
}

export const emptyFilters: ProductFilterState = {
  query: '',
  category: 'all',
  industry: 'all',
  application: 'all'
};

interface ProductFiltersProps {
  value: ProductFilterState;
  onChange: (next: ProductFilterState) => void;
  resultCount: number;
}

export function ProductFilters({ value, onChange, resultCount }: ProductFiltersProps) {
  const set = <K extends keyof ProductFilterState,>(key: K, v: ProductFilterState[K]) =>
  onChange({ ...value, [key]: v });

  const isDirty =
  value.query !== '' ||
  value.category !== 'all' ||
  value.industry !== 'all' ||
  value.application !== 'all';

  return (
    <div className="rounded-xl border border-steel-100 bg-white p-4 shadow-card sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label htmlFor="product-search" className="mb-1.5 block text-sm font-semibold text-navy-900">
            Search products
          </label>
          <div className="relative">
            <SearchIcon
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-steel-400"
              aria-hidden />
            
            <input
              id="product-search"
              type="search"
              value={value.query}
              onChange={(e) => set('query', e.target.value)}
              placeholder="e.g. side entry, top entry, bottom entry"
              className="min-h-[44px] w-full rounded-md border border-steel-200 bg-white py-2.5 pl-10 pr-3.5 text-[15px] text-navy placeholder:text-steel-400 focus:border-brand focus:outline-none" />
            
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:w-[420px]">
          <div>
            <label htmlFor="filter-industry" className="mb-1.5 block text-sm font-semibold text-navy-900">
              Industry
            </label>
            <SelectInput
              id="filter-industry"
              value={value.industry}
              onChange={(e) => set('industry', e.target.value)}>
              
              <option value="all">All industries</option>
              {industries.map((i) =>
              <option key={i.slug} value={i.slug}>
                  {i.name}
                </option>
              )}
            </SelectInput>
          </div>
          <div>
            <label
              htmlFor="filter-application"
              className="mb-1.5 block text-sm font-semibold text-navy-900">
              
              Application
            </label>
            <SelectInput
              id="filter-application"
              value={value.application}
              onChange={(e) => set('application', e.target.value)}>
              
              <option value="all">All applications</option>
              {applications.map((a) =>
              <option key={a.slug} value={a.slug}>
                  {a.name}
                </option>
              )}
            </SelectInput>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-steel-100 pt-4">
        <fieldset>
          <legend className="mb-2.5 text-sm font-semibold text-navy-900">Category</legend>
          <div className="flex flex-wrap gap-2">
            {productCategories.map((c) => {
              const active = value.category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => set('category', c.id)}
                  className={cn(
                    'min-h-[40px] rounded-full border px-4 text-sm font-semibold transition-[background-color,border-color,color] duration-200 ease-smooth',
                    active ?
                    'border-navy bg-navy text-white' :
                    'border-steel-200 bg-white text-steel-600 hover:border-brand hover:text-brand'
                  )}>
                  
                  {c.label}
                </button>);

            })}
          </div>
        </fieldset>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-steel-100 pt-4">
        <p className="text-sm text-steel-600" role="status" aria-live="polite">
          <span className="font-semibold text-navy">{resultCount}</span>{' '}
          {resultCount === 1 ? 'product' : 'products'} match your selection
        </p>
        <button
          type="button"
          onClick={() => onChange(emptyFilters)}
          disabled={!isDirty}
          className="inline-flex min-h-[40px] items-center gap-2 rounded-md px-3 text-sm font-semibold text-brand-600 transition-colors duration-200 ease-smooth hover:bg-brand-50 disabled:opacity-40">
          
          <RotateCcwIcon className="h-4 w-4" aria-hidden />
          Reset filters
        </button>
      </div>
    </div>);

}