import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Field, SelectInput, TextArea, TextInput } from '../ui/Field';
import { industries } from '../../data/industries';
import { products } from '../../data/products';
import { submitForm, type SubmitStatus } from '../../utils/submitForm';
import { requireText, validateEmail, validatePhone, type Errors } from '../../utils/validation';

interface ContactValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
  message: string;
}

const empty: ContactValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  industry: '',
  requirement: '',
  message: ''
};

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<Errors<ContactValues>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [reference, setReference] = useState('');

  const set = (key: keyof ContactValues) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors<ContactValues> = {
      name: requireText(values.name, 'Name'),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone),
      message: requireText(values.message, 'Message', 10)
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setStatus('submitting');
    try {
      const res = await submitForm('Contact enquiry', values as unknown as Record<string, unknown>);
      setReference(res.reference);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-steel-100 bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-50">
          <CheckCircle2Icon className="h-7 w-7 text-accent-700" aria-hidden />
        </div>
        <h3 className="mt-4 font-display text-xl font-extrabold text-navy">Message sent</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-steel-600">
          Thanks for getting in touch. Your enquiry reference is{' '}
          <span className="font-semibold text-navy">{reference}</span> — we typically respond within
          one working day.
        </p>
        <p className="mt-3 text-xs text-steel-500">
          Demo mode: no backend is connected yet, so nothing has been sent.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues(empty);
            setStatus('idle');
          }}>
          
          Send another message
        </Button>
      </div>);

  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-steel-100 bg-white p-5 shadow-card sm:p-7">
      
      <h3 className="font-display text-xl font-extrabold text-navy">Send us your enquiry</h3>
      <p className="mt-1.5 text-sm text-steel-600">
        Tell us about your process and we will route your message to the right engineer.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="c-name" label="Name" required error={errors.name}>
          <TextInput id="c-name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
        </Field>
        <Field id="c-company" label="Company">
          <TextInput id="c-company" value={values.company} onChange={set('company')} autoComplete="organization" />
        </Field>
        <Field id="c-email" label="Email" required error={errors.email}>
          <TextInput id="c-email" type="email" value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" />
        </Field>
        <Field id="c-phone" label="Phone" error={errors.phone}>
          <TextInput id="c-phone" type="tel" value={values.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
        </Field>
        <Field id="c-industry" label="Industry">
          <SelectInput id="c-industry" value={values.industry} onChange={set('industry')}>
            <option value="">Select industry</option>
            {industries.map((i) =>
            <option key={i.slug} value={i.name}>
                {i.name}
              </option>
            )}
          </SelectInput>
        </Field>
        <Field id="c-requirement" label="Product / Requirement">
          <SelectInput id="c-requirement" value={values.requirement} onChange={set('requirement')}>
            <option value="">Select requirement</option>
            {products.map((p) =>
            <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            )}
            <option value="Impellers / Mixing elements">Impellers / Mixing elements</option>
            <option value="Service & spare parts">Service &amp; spare parts</option>
            <option value="General enquiry">General enquiry</option>
          </SelectInput>
        </Field>
        <Field id="c-message" label="Message" required error={errors.message} className="sm:col-span-2">
          <TextArea id="c-message" value={values.message} onChange={set('message')} error={errors.message} />
        </Field>
      </div>

      {status === 'error' &&
      <p role="alert" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Something went wrong. Please try again.
        </p>
      }

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-steel-500">
          Fields marked <span className="text-accent-700">*</span> are required.
        </p>
        <Button type="submit" variant="accent" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ?
          <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </> :

          <>
              Send message
              <SendIcon className="h-4 w-4" aria-hidden />
            </>
          }
        </Button>
      </div>
    </form>);

}