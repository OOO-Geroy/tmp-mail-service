declare const API_DOMAIN: string;
export const API_BASE = process.env.NODE_ENV === 'production' ? `https://${API_DOMAIN}/` : 'http://localhost:3000/';
