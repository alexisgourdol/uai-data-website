import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { whatsappUrl } from "./whatsapp.js";
import { TRANSLATIONS, LANGUAGES } from "./translations.js";

const NUMBER = ["33", "769", "814", "131"].join("");

test("opens a wa.me chat with Alexis's number", () => {
    const url = new URL(whatsappUrl("hello"));
    assert.equal(url.origin, "https://wa.me");
    assert.equal(url.pathname, "/" + NUMBER);
});

test("pre-fills the given message, encoded", () => {
    const message = "Oi Alexis, encontrei o uaidata.io e gostaria de conversar sobre IA na minha empresa.";
    const url = new URL(whatsappUrl(message));
    assert.equal(url.searchParams.get("text"), message);
    assert.ok(!whatsappUrl(message).includes(" "));
});

test("every language has a WhatsApp message and label", () => {
    for (const { code } of LANGUAGES) {
        const w = TRANSLATIONS[code].whatsapp;
        assert.ok(w?.message, `${code} message`);
        assert.ok(w?.label, `${code} label`);
    }
    assert.equal(TRANSLATIONS["pt-BR"].whatsapp.message, "Oi Alexis, encontrei o uaidata.io e gostaria de conversar sobre IA na minha empresa.");
    assert.equal(TRANSLATIONS.fr.whatsapp.message, "Bonjour Alexis, j'ai découvert uaidata.io et j'aimerais parler d'IA dans mon entreprise.");
    assert.equal(TRANSLATIONS.en.whatsapp.message, "Hi Alexis, I found uaidata.io and I'd like to talk about AI in my business.");
});

test("the number never appears whole in the source (scraping)", () => {
    for (const file of ["whatsapp.js", "App.jsx", "translations.js"]) {
        const src = readFileSync(new URL(file, import.meta.url), "utf8").replace(/\s+/g, "");
        assert.ok(!src.includes(NUMBER), `${file} contains the number`);
        assert.ok(!src.includes("+33769"), `${file} contains the formatted number`);
    }
});
