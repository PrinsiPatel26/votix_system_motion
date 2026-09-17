import { company } from '../data/navigation';

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type EnquiryContext = {
  type: string;
  product?: string;
};

const fieldLabels: Record<string, string> = {
  name: 'Full Name',
  company: 'Company',
  email: 'Email',
  phone: 'Phone',
  country: 'Country',
  industry: 'Industry',
  product: 'Product / Series',
  requirement: 'Product / Requirement',
  quantity: 'Quantity',
  application: 'Application',
  capacity: 'Required Capacity',
  viscosity: 'Viscosity',
  temperature: 'Temperature',
  pressure: 'Pressure',
  material: 'Material of Construction',
  requestType: 'Request Type',
  message: 'Message',
  attachment: 'Attachment'
};

function labelFor(key: string) {
  return fieldLabels[key] ?? key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
}

function valueFor(value: unknown) {
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return '';
}

export function getWhatsAppNumber() {
  return company.phone.replace(/\D/g, '');
}

export function buildWhatsAppEnquiryMessage(
  formData: Record<string, unknown>,
  context: EnquiryContext
) {
  const details = Object.entries(formData)
    .map(([key, value]) => ({ label: labelFor(key), value: valueFor(value) }))
    .filter(({ value }) => value);
  const product = context.product?.trim() || valueFor(formData.product) || valueFor(formData.requirement);
  const page = typeof window === 'undefined' ? '' : window.location.pathname;

  const lines = [
    'Hello VOTIX Systems,',
    '',
    `I would like to make a ${context.type}.`,
    '',
    'CUSTOMER / REQUEST DETAILS',
    '-------------------------',
    ...details.map(({ label, value }) => `${label}: ${value}`),
    '',
    'SOURCE',
    '-------------------------',
    'Source: VOTIX Systems Website',
    ...(product ? [`Product / Series: ${product}`] : []),
    ...(page && page !== '/' ? [`Page: ${page}`] : []),
    '',
    'Please contact me regarding this requirement.',
    '',
    'Thank you,',
    'VOTIX Systems Website Enquiry'
  ];

  return lines.join('\n');
}

export function openWhatsAppEnquiry(
  formData: Record<string, unknown>,
  context: EnquiryContext
) {
  const message = buildWhatsAppEnquiryMessage(formData, context);
  const url = `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`;
  const popup = window.open(url, '_blank', 'noopener,noreferrer');

  if (popup) return true;

  window.location.assign(url);
  return true;
}