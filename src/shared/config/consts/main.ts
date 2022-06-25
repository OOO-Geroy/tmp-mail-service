declare const ROUTER_BASENAME: any;
declare const ROUTER_TYPE: 'memory' | 'browser';
export const BASENAME = typeof ROUTER_BASENAME === 'undefined' ? '/' : ROUTER_BASENAME;
export const ROUTER_TYPE_COMPONENT = typeof ROUTER_TYPE === 'undefined' ? 'browser' : ROUTER_TYPE;
