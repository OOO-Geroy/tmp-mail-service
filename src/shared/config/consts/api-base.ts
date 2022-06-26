declare const TMS_API_DOMAIN: string;
export const API_BASE = process.env.NODE_ENV === 'production' && typeof TMS_API_DOMAIN !== 'undefined' ? `https://${TMS_API_DOMAIN}/` : 'http://localhost:3000/';
