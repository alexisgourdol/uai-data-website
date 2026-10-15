// Injects the server-rendered App into dist/index.html so crawlers and link previews
// see the full page without running JavaScript. Runs after both Vite builds (see package.json).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = path.join(root, "dist/index.html");
const serverEntry = path.join(root, "dist-server/entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
let html = fs.readFileSync(templatePath, "utf-8");

if (!html.includes("<!--app-html-->")) throw new Error("index.html is missing the <!--app-html--> placeholder");
html = html.replace("<!--app-html-->", render());

// Cloudflare Web Analytics: the token is public (it ships in the HTML), set as a repo variable in CI.
const cfToken = process.env.CF_BEACON_TOKEN;
if (cfToken) {
    const beacon = `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='${JSON.stringify({ token: cfToken })}'></script>`;
    html = html.replace("</body>", `    ${beacon}\n</body>`);
} else {
    console.warn("CF_BEACON_TOKEN not set: building without analytics");
}

fs.writeFileSync(templatePath, html);
fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log("Prerendered dist/index.html");
