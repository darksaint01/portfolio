import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".pdf": "application/pdf", ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8", ".woff": "font/woff",
  ".woff2": "font/woff2"
};
const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(requestUrl.pathname);
    const requested = resolve(root, "." + pathname);
    if (requested !== root && !requested.startsWith(root + sep)) {
      res.writeHead(403).end("Forbidden"); return;
    }
    let target = requested;
    try { if ((await stat(target)).isDirectory()) target = resolve(target, "index.html"); }
    catch { /* alternative .html and 404 below */ }
    try { await stat(target); }
    catch {
      const html = requested + ".html";
      try { await stat(html); target = html; }
      catch { target = resolve(root, "404.html"); res.statusCode = 404; }
    }
    const bytes = await readFile(target);
    res.setHeader("Content-Type", types[extname(target)] || "application/octet-stream");
    res.end(bytes);
  } catch { res.writeHead(500).end("Server error"); }
});
server.listen(port, "127.0.0.1", () => console.log(`Static site: http://localhost:${port}`));
