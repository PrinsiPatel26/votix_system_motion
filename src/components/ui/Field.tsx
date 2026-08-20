import React from 'react';
import { cn } from '../../utils/cn';

const controlBase =
'w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-navy placeholder:text-steel-400 transition-colors duration-150 ease-smooth focus:border-brand focus:outline-none min-h-[44px]';

interface FieldWrapperProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({ id, label, error, required, hint, className, children }: FieldWrapperProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <label htmlFor={id} className="mb-1.5 text-sm font-semibold text-navy-900">
        {label}
        {required &&
        <span className="ml-1 text-accent-700" aria-hidden>
            *
          </span>
        }
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-steel-500">{hint}</p>}
      {error &&
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      }
    </div>);

}

export const inputClass = (error?: string) =>
cn(controlBase, error ? 'border-red-400' : 'border-steel-200');

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}
export function TextInput({ error, className, ...rest }: TextInputProps) {
  return (
    <input
      {...rest}
      aria-invalid={!!error}
      aria-describedby={error ? `${rest.id}-error` : undefined}
      className={cn(inputClass(error), className)} />);


}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
}
export function SelectInput({ error, className, children, ...rest }: SelectInputProps) {
  return (
    <select
      {...rest}
      aria-invalid={!!error}
      aria-describedby={error ? `${rest.id}-error` : undefined}
      className={cn(inputClass(error), 'appearance-none bg-white pr-9', className)}
      style={{
        backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23526176' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 12px center'
      }}>
      
      {children}
    </select>);

}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}
export function TextArea({ error, className, ...rest }: TextAreaProps) {
  return (
    <textarea
      {...rest}
      aria-invalid={!!error}
      aria-describedby={error ? `${rest.id}-error` : undefined}
      className={cn(inputClass(error), 'min-h-[120px] resize-y py-3', className)} />);


}