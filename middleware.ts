export { default } from 'next-auth/middleware';

// Secure the matching routes ...
export const config = { matcher: ['/'] };
