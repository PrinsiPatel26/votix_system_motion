export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

/** Existing demo submission handler used by the contact and support forms. */
export async function submitForm(
formName: string,
payload: Record<string, unknown>)
: Promise<{ok: true;reference: string;}> {
  // eslint-disable-next-line no-console
  console.info(`[VOTIX] ${formName} submission payload`, payload);
  await new Promise((resolve) => setTimeout(resolve, 900));
  const reference = `VTX-${Date.now().toString().slice(-6)}`;
  return { ok: true, reference };
}

/** Quote-specific boundary until a real quote/email API is configured. */
export async function submitQuoteRequest(payload: Record<string, unknown>): Promise<never> {
  void payload;
  throw new Error('Quote submission service is not configured');
}