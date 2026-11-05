# Kennu Martos Portfolio — Vercel static hosting deployment

This ZIP contains the original portfolio source and assets, plus configuration that deploys the exported site as **static files** rather than invoking Vercel's Next.js server adapter.

## Fix for the latest error

The previous deployment already passed Next.js compilation and TypeScript checking and generated five static pages. The remaining error was:

```
[NEXT_NO_ROUTES_MANIFEST] .../out/routes-manifest.json couldn't be found
```

`out/` is an HTML static-export directory, and therefore does not contain the Next.js server routes manifest. The previous `vercel.json` incorrectly combined `"framework": "nextjs"` with `"outputDirectory": "out"`, telling Vercel to expect server build artifacts inside a static directory.

The repaired `vercel.json` uses:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "pnpm run build",
  "outputDirectory": "out"
}
```

Vercel documents `framework: null` as the **Other** framework preset, which lets it serve the `out` directory as a plain static website. The underlying project is still **Next.js**; this only changes Vercel's deployment adapter. The source files, images, styling, content, and behavior have not been redesigned.

Earlier repairs are preserved:

- `data/portfolio.ts`: avoids shadowing Node's `process` identifier.
- `app/robots.ts` and `app/sitemap.ts`: force static prerendering for Next.js 16 export.
- Node.js pinned to 22.x, pnpm pinned to 10.34.4.

## Upload

1. Visit https://vercel.com/drop and sign in.
2. Upload **Kennu-Martos-Portfolio-Vercel-Hosting-Fixed.zip** (do not reuse an earlier ZIP or merely redeploy an old source build).
3. Leave the project root at `/`.
4. The ZIP's `vercel.json` explicitly selects Framework **Other**, Build Command **pnpm run build**, and Output Directory **out**.
5. Publish and visit the URL provided by Vercel after deployment finishes.

If configuring a project manually, use these same exact values:

| Setting | Value |
| --- | --- |
| Framework Preset | Other (not Next.js) |
| Build Command | `pnpm run build` |
| Output Directory | `out` |
| Install Command | `pnpm install --frozen-lockfile` (or leave auto-detected) |
| Root Directory | project root |
| Node.js Version | 22.x |

Vercel Drop may create a **new** project/URL. To update an existing project, replace the source via its connected repository or Vercel CLI. Redeploying the earlier failed deployment without updating the source will repeat the previous error.

## Build verification and warnings

The latest user-provided Vercel log proves that the Next.js code **compiled, completed TypeScript checks, generated all static pages, and produced the export**. This new package corrects the Vercel adapter configuration that was responsible for the *post-build* manifest lookup. The corrected deployment has **not been independently run on Vercel**, so success cannot be guaranteed until the new deployment log is received.

The `pnpm` ignored dependency build-script warning and the Node.js deprecation notice were not fatal in that build. No need to override those security controls.

## Notes

- The contact form uses an email draft (`mailto:`), not a server endpoint.
- The uploaded resume and contact details are public after deployment; review them if necessary.
- The generated `robots.txt` and `sitemap.xml` are preserved.

References: https://vercel.com/docs/project-configuration/vercel-json and https://vercel.com/docs/builds/configure-a-build
