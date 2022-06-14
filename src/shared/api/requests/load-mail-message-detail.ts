import { API_BASE } from 'shared/config';
import { MailMessage } from 'shared/entities';
import { $fetch } from './fetch';

/**
 *
 * @param seq
 */
export async function loadMailMessageDetail(seq: number) {
  const data = await $fetch<MailMessage>(`${API_BASE}messages/detail/${seq}`);

  return data;
}
