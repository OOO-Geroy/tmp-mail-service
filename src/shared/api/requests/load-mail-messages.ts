import { $fetch, API_BASE, MailMessage } from 'shared';

/**
 *
 * @param seq
 * @returns
 */
export async function loadMailMessages(seq?: number) {
  const data = await $fetch<MailMessage[]>(`${API_BASE}messages/all${seq ? `/${seq + 1}` : ''}`);
  return data;
}
