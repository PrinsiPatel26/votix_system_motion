import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon, PaperclipIcon, SendIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Field, SelectInput, TextArea, TextInput } from '../ui/Field';
import { industries } from '../../data/industries';
import { products } from '../../data/products';
import { applications } from '../../data/applications';
import { submitForm, type SubmitStatus } from '../../utils/submitForm';
import { requireText, validateEmail, validatePhone, type Errors } from '../../utils/validation';

export interface QuotePrefill {
  product?: string;
  industry?: string;
  application?: string;
}

interface QuoteFormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  product: string;
  application: string;
  capacity: string;
  viscosity: string;
  temperature: string;
  pressure: string;
  material: string;
  message: string;
}

const initial = (prefill: QuotePrefill): QuoteFormState => ({
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  industry: prefill.industry ?? '',
  product: prefill.product ?? '',
  application: prefill.application ?? '',
  capacity: '',
  viscosity: '',
  temperature: '',
  pressure: '',
  material: '',
  message: ''
});

interface QuoteFormProps {
  prefill?: QuotePrefill;
  onDone?: () => void;
  compact?: boolean;
}

export function QuoteForm({ prefill = {}, onDone, compact = false }: QuoteFormProps) {
  const [values, setValues] = useState<QuoteFormState>(() => initial(prefill));
  const [errors, setErrors] = useState<Errors<QuoteFormState>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [attachment, setAttachment] = useState<string>('');
  const [reference, setReference] = useState('');

  const set = (key: keyof QuoteFormState) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors<QuoteFormState> = {
      name: requireText(values.name, 'Name'),
      company: requireText(values.company, 'Company'),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone, true),
      product: values.product ? undefined : 'Select a product',
      message: requireText(values.message, 'Message', 10)
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await submitForm('Quote request', { ...values, attachment });
      setReference(res.reference);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-4 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-50">
          <CheckCircle2Icon className="h-7 w-7 text-accent-700" aria-hidden />
        </div>
        <h3 className="mt-4 font-display text-xl font-extrabold text-navy">Quote request received</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-steel-600">
          Thank you. Your enquiry has been logged with reference{' '}
          <span className="font-semibold text-navy">{reference}</span>. A VOTIX application engineer
          will review your process data and respond with a proposal.
        </p>
        <p className="mt-3 text-xs text-steel-500">
          Demo mode: no backend is connected yet, so nothing has been sent.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            onClick={() => {
              setValues(initial(prefill));
              setAttachment('');
              setStatus('idle');
            }}>
            
            Submit another request
          </Button>
          {onDone &&
          <Button variant="primary" onClick={onDone}>
              Close
            </Button>
          }
        </div>
      </div>);

  }

  const grid = compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <fieldset className="space-y-4">
        <legend className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
          Your details
        </legend>
        <div className={`grid grid-cols-1 gap-4 ${grid}`}>
          <Field id="q-name" label="Name" required error={errors.name}>
            <TextInput id="q-name" name="name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
          </Field>
          <Field id="q-company" label="Company" required error={errors.company}>
            <TextInput id="q-company" name="company" value={values.company} onChange={set('company')} error={errors.company} autoComplete="organization" />
          </Field>
          <Field id="q-email" label="Email" required error={errors.email}>
            <TextInput id="q-email" name="email" type="email" value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" />
          </Field>
          <Field id="q-phone" label="Phone" required error={errors.phone}>
            <TextInput id="q-phone" name="phone" type="tel" value={values.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
          </Field>
          <Field id="q-country" label="Country">
            <TextInput id="q-country" name="country" value={values.country} onChange={set('country')} autoComplete="country-name" />
          </Field>
          <Field id="q-industry" label="Industry">
            <SelectInput id="q-industry" name="industry" value={values.industry} onChange={set('industry')}>
              <option value="">Select industry</option>
              {industries.map((i) =>
              <option key={i.slug} value={i.name}>
                  {i.name}
                </option>
              )}
            </SelectInput>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-4 border-t border-steel-100 pt-5">
        <legend className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
          Process data
        </legend>
        <div className={`grid grid-cols-1 gap-4 ${grid}`}>
          <Field id="q-product" label="Product" required error={errors.product}>
            <SelectInput id="q-product" name="product" value={values.product} onChange={set('product')} error={errors.product}>
              <option value="">Select product</option>
              {products.map((p) =>
              <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              )}
              <option value="Impellers / Mixing elements">Impellers / Mixing elements</option>
              <option value="Not sure yet">Not sure yet — please advise</option>
            </SelectInput>
          </Field>
          <Field id="q-application" label="Application">
            <SelectInput id="q-application" name="application" value={values.application} onChange={set('application')}>
              <option value="">Select application</option>
              {applications.map((a) =>
              <option key={a.slug} value={a.name}>
                  {a.name}
                </option>
              )}
            </SelectInput>
          </Field>
          <Field id="q-capacity" label="Required capacity" hint="e.g. 12 m³ working volume">
            <TextInput id="q-capacity" name="capacity" value={values.capacity} onChange={set('capacity')} placeholder="m³" />
          </Field>
          <Field id="q-viscosity" label="Viscosity" hint="e.g. 2 500 cP at 25 °C">
            <TextInput id="q-viscosity" name="viscosity" value={values.viscosity} onChange={set('viscosity')} placeholder="cP" />
          </Field>
          <Field id="q-temperature" label="Temperature">
            <TextInput id="q-temperature" name="temperature" value={values.temperature} onChange={set('temperature')} placeholder="°C" />
          </Field>
          <Field id="q-pressure" label="Pressure">
            <TextInput id="q-pressure" name="pressure" value={values.pressure} onChange={set('pressure')} placeholder="bar / vacuum" />
          </Field>
          <Field id="q-material" label="Material of construction" className={compact ? '' : 'lg:col-span-3'}>
            <TextInput id="q-material" name="material" value={values.material} onChange={set('material')} placeholder="SS 304 / SS 316 / other" />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-4 border-t border-steel-100 pt-5">
        <legend className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
          Your requirement
        </legend>
        <Field id="q-message" label="Message" required error={errors.message}>
          <TextArea
            id="q-message"
            name="message"
            value={values.message}
            onChange={set('message')}
            error={errors.message}
            placeholder="Describe the vessel, the mixing task and any constraints." />
          
        </Field>
        <div>
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Attachment</span>
          <label
            htmlFor="q-attachment"
            className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md border border-dashed border-steel-300 px-3.5 py-2.5 text-sm text-steel-600 transition-colors duration-150 ease-smooth hover:border-brand hover:text-brand">
            
            <PaperclipIcon className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate">{attachment || 'Attach a data sheet or vessel drawing'}</span>
          </label>
          <input
            id="q-attachment"
            name="attachment"
            type="file"
            className="sr-only"
            onChange={(e) => setAttachment(e.target.files?.[0]?.name ?? '')} />
          
        </div>
      </fieldset>

      {status === 'error' &&
      <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Something went wrong while sending your request. Please try again.
        </p>
      }

      <div className="flex flex-col gap-3 border-t border-steel-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-steel-500">
          Fields marked <span className="text-accent-700">*</span> are required.
        </p>
        <Button type="submit" variant="accent" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ?
          <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden />
              Submitting…
            </> :

          <>
              Send quote request
              <SendIcon className="h-4 w-4" aria-hidden />
            </>
          }
        </Button>
      </div>
    </form>);

}