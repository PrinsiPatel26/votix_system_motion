import React, { useState } from 'react';
import { CheckCircle2Icon, PaperclipIcon, SendIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Field, SelectInput, TextArea, TextInput } from '../ui/Field';
import { products } from '../../data/products';
import { openWhatsAppEnquiry, type SubmitStatus } from '../../utils/whatsapp';
import { requireText, validateEmail, validatePhone, type Errors } from '../../utils/validation';

interface SupportValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  requestType: string;
  message: string;
}

const empty: SupportValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  requestType: '',
  message: ''
};

const requestTypes = [
'Maintenance',
'Spare parts',
'Installation',
'Commissioning',
'Repair',
'Technical assistance'];


export function SupportForm() {
  const [values, setValues] = useState<SupportValues>(empty);
  const [errors, setErrors] = useState<Errors<SupportValues>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [attachment, setAttachment] = useState('');

  const set = (key: keyof SupportValues) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
  {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors<SupportValues> = {
      name: requireText(values.name, 'Name'),
      company: requireText(values.company, 'Company'),
      email: validateEmail(values.email),
      phone: validatePhone(values.phone),
      requestType: values.requestType ? undefined : 'Select a request type',
      message: requireText(values.message, 'Message', 10)
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    try {
      if (openWhatsAppEnquiry({ ...values, attachment }, { type: 'support request', product: values.product })) {
        setStatus('success');
      }
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
        <h3 className="mt-4 font-display text-xl font-extrabold text-navy">WhatsApp opened</h3>
        <p className="mx-auto mt-2 max-w-md text-[15px] leading-relaxed text-steel-600">
          Your request details are ready in WhatsApp. Please press Send to submit your request.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues(empty);
            setAttachment('');
            setStatus('idle');
          }}>
          
          Raise another request
        </Button>
      </div>);

  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-lg border border-steel-100 bg-white p-5 shadow-card sm:p-7">
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field id="s-name" label="Name" required error={errors.name}>
          <TextInput id="s-name" value={values.name} onChange={set('name')} error={errors.name} autoComplete="name" />
        </Field>
        <Field id="s-company" label="Company" required error={errors.company}>
          <TextInput id="s-company" value={values.company} onChange={set('company')} error={errors.company} autoComplete="organization" />
        </Field>
        <Field id="s-email" label="Email" required error={errors.email}>
          <TextInput id="s-email" type="email" value={values.email} onChange={set('email')} error={errors.email} autoComplete="email" />
        </Field>
        <Field id="s-phone" label="Phone" error={errors.phone}>
          <TextInput id="s-phone" type="tel" value={values.phone} onChange={set('phone')} error={errors.phone} autoComplete="tel" />
        </Field>
        <Field id="s-product" label="Product">
          <SelectInput id="s-product" value={values.product} onChange={set('product')}>
            <option value="">Select product</option>
            {products.map((p) =>
            <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            )}
            <option value="Impellers / Mixing elements">Impellers / Mixing elements</option>
            <option value="Other / unknown">Other / unknown</option>
          </SelectInput>
        </Field>
        <Field id="s-type" label="Request type" required error={errors.requestType}>
          <SelectInput id="s-type" value={values.requestType} onChange={set('requestType')} error={errors.requestType}>
            <option value="">Select request type</option>
            {requestTypes.map((t) =>
            <option key={t} value={t}>
                {t}
              </option>
            )}
          </SelectInput>
        </Field>
        <Field id="s-message" label="Message" required error={errors.message} className="sm:col-span-2">
          <TextArea
            id="s-message"
            value={values.message}
            onChange={set('message')}
            error={errors.message}
            placeholder="Describe the equipment, serial number if known, and the issue or parts required." />
          
        </Field>
        <div className="sm:col-span-2">
          <span className="mb-1.5 block text-sm font-semibold text-navy-900">Attachment</span>
          <label
            htmlFor="s-attachment"
            className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md border border-dashed border-steel-300 px-3.5 py-2.5 text-sm text-steel-600 transition-colors duration-150 ease-smooth hover:border-brand hover:text-brand">
            
            <PaperclipIcon className="h-4 w-4 shrink-0" aria-hidden />
            <span className="truncate">{attachment || 'Attach a photo, drawing or nameplate image'}</span>
          </label>
          <input
            id="s-attachment"
            type="file"
            className="sr-only"
            onChange={(e) => setAttachment(e.target.files?.[0]?.name ?? '')} />
          
        </div>
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
        <Button type="submit" variant="accent" size="lg">
          Submit request
          <SendIcon className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </form>);

}