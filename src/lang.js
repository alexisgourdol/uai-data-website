// Which language a visitor sees (SCP-60). First match wins:
// ?lang= in the URL (links shared per channel), then the visitor's saved choice,
// then the browser's language, then English. Pure so it runs under `node --test`.
export const SUPPORTED = ["en", "fr", "pt-BR"];
export const DEFAULT_LANG = "en";
export const STORAGE_KEY = "uai-lang";

function normalize(value) {
    if (!value) return null;
    const lower = value.toLowerCase();
    return SUPPORTED.find(code => code.toLowerCase() === lower) ?? null;
}

// Browser tags are broader than ours: any Portuguese reads the Brazilian copy, any French the French one.
function fromBrowserTag(tag) {
    const base = (tag || "").toLowerCase().split("-")[0];
    if (base === "pt") return "pt-BR";
    if (base === "fr") return "fr";
    if (base === "en") return "en";
    return null;
}

export function pickLanguage({ search, stored, browserLanguages }) {
    const fromUrl = normalize(new URLSearchParams(search || "").get("lang"));
    if (fromUrl) return fromUrl;
    const fromStorage = normalize(stored);
    if (fromStorage) return fromStorage;
    for (const tag of browserLanguages || []) {
        const match = fromBrowserTag(tag);
        if (match) return match;
    }
    return DEFAULT_LANG;
}

// Path + query + hash with ?lang= removed, so a copied link shows what the visitor picked.
export function urlWithoutLang(relativeUrl) {
    const url = new URL(relativeUrl, "http://x");
    url.searchParams.delete("lang");
    return url.pathname + url.search + url.hash;
}
