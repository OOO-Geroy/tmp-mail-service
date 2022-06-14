export interface MailMessageAddress {
  /**
   * The email address.
   */
  address?: string | undefined;
  /**
   * The name part of the email/group.
   */
  name: string;
  /**
   * An array of grouped addresses.
   */
  group?: MailMessageAddress[] | undefined;
}

export interface MailMessageObject {
  /**
   * An array with address details.
   */
  value: MailMessageAddress[];
  /**
   * A formatted address string for HTML context.
   */
  html: string;
  /**
   * A formatted address string for plaintext context.
   */
  text: string;
}

export interface MailMessageAttachment {
  /**
   * A Buffer that contains the attachment contents.
   */
  content: Buffer;
  /**
   * If true then this attachment should not be offered for download
   * (at least not in the main attachments list).
   */
  related: boolean;
}

export class MailMessage {
  /**
   * message UID number.
   */
  uid: number = 0;

  /**
   * message sequence number. Always included in the response
   */
  seq: number = 0;

  /**
   * The HTML body of the message.
   *
   * Sets to `false` when there is no HTML body.
   *
   * If the message included embedded images as cid: urls then these are all
   * replaced with base64 formatted data: URIs.
   */
  html?: string | false = undefined;

  /**
   * The plaintext body of the message.
   */
  text?: string = undefined;

  /**
   * The plaintext body of the message formatted as HTML.
   */
  textAsHtml?: string = undefined;

  /**
   * The subject line.
   */
  subject?: string = '';

  /**
   * An address object for the `From:` header.
   */
  from?: MailMessageObject;

  /**
   * An address object or array of address objects for the `To:` header.
   */
  to?: MailMessageObject | MailMessageObject[];

  /**
   * An address object or array of address objects for the `Cc:` header.
   */
  cc?: MailMessageObject | MailMessageObject[];

  /**
   * A Date object for the `Date:` header.
   */
  date?: Date;

  /**
   * An array of attachments.
   */
  priority?: 'normal' | 'low' | 'high';

  /**
   * Priority of the e-mail.
   */
  attachments?: MailMessageAttachment[];

  constructor(partial: MailMessage) {
    Object.assign(this, partial);
  }
}
