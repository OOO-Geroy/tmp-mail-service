declare const API_DOMAIN: string;
export const API_BASE = process.env.NODE_ENV === 'production' && typeof API_DOMAIN !== 'undefined' ? `https://${API_DOMAIN}/` : 'http://localhost:3000/';
