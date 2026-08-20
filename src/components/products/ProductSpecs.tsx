import React from 'react';
import type { SpecRow } from '../../types';

interface ProductSpecsProps {
  specifications: SpecRow[];
}

export function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-steel-100">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <caption className="sr-only">Technical specification</caption>
        <tbody>
          {specifications.map((row, i) =>
          <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-mist'}>
              <th
              scope="row"
              className="w-[40%] border-b border-steel-100 px-4 py-3 align-top font-semibold text-navy">
              
                {row.label}
              </th>
              <td className="border-b border-steel-100 px-4 py-3 align-top text-steel-600">
                {row.value}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>);

}