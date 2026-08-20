export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
export const PHONE_RE = /^[+\d][\d\s\-()]{6,19}$/;

export type Errors<T> = Partial<Record<keyof T, string>>;

export function requireText(value: string, label: string, min = 2): string | undefined {
  if (!value.trim()) return `${label} is required`;
  if (value.trim().length < min) return `${label} must be at least ${min} characters`;
  return undefined;
}

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return 'Email is required';
  if (!EMAIL_RE.test(value.trim())) return 'Enter a valid email address';
  return undefined;
}

export function validatePhone(value: string, required = false): string | undefined {
  if (!value.trim()) return required ? 'Phone number is required' : undefined;
  if (!PHONE_RE.test(value.trim())) return 'Enter a valid phone number';
  return undefined;
}