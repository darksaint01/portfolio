import { spawnSync } from 'node:child_process';

// CF_PAGES_URL is injected automatically during Cloudflare Pages builds.
// NEXT_PUBLIC_SITE_URL can override it for a permanent custom domain.
const origin = process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.CF_PAGES_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`);

if (origin) {
  try {
    const parsed = new URL(origin);
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('unsupported protocol');
    process.env.NEXT_PUBLIC_SITE_URL = parsed.origin;
  } catch {
    console.error('Invalid site origin: NEXT_PUBLIC_SITE_URL must be an http(s) URL.');
    process.exit(1);
  }
}

const cmd = process.platform === 'win32' ? 'next.cmd' : 'next';
const result = spawnSync(cmd, ['build'], {
  env: process.env,
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
if (result.error) console.error(result.error);
process.exit(result.status ?? 1);
