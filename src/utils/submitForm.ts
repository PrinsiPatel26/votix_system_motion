export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Isolated submit handler. No backend is configured yet — this simulates the
 * network round-trip so the UI states are real. Replace the body with a fetch()
 * call to the real endpoint when the API is available.
 */
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