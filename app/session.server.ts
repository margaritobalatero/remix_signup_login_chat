// app/session.server.ts
import { createCookieSessionStorage } from '@remix-run/node';

const sessionSecret = process.env.SESSION_SECRET || 'junjiejunjie';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: 'chat-app-session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    httpOnly: true,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;