declare const TMS_ROUTER_BASENAME: any;
declare const TMS_ROUTER_TYPE: 'memory' | 'browser';
export const BASENAME = typeof TMS_ROUTER_BASENAME === 'undefined' ? '/' : TMS_ROUTER_BASENAME;
export const ROUTER_TYPE_COMPONENT = typeof TMS_ROUTER_TYPE === 'undefined' ? 'browser' : TMS_ROUTER_TYPE;
export const mountElSelector = '#mail-tmp-root';
