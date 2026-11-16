import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { POSTS, SUBSTACK_URL, formatPostDate } from "./posts.js";
import { TRANSLATIONS, LANGUAGES } from "./translations.js";

const CASE_STUDY = "https://alexisgourdol.substack.com/p/a-firewall-cant-tell-your-test-database";

test("posts are newest first", () => {
    const dates = POSTS.map(p => p.date);
    assert.deepEqual(dates, [...dates].sort().reverse());
});

test("every post links to Substack and has a title, subtitle and alt text", () => {
    assert.equal(POSTS.length, 3);
    for (const p of POSTS) {
        assert.ok(p.url.startsWith(SUBSTACK_URL + "/p/"), p.url);
        assert.ok(p.title && p.subtitle && p.alt, p.url);
        assert.match(p.date, /^\d{4}-\d{2}-\d{2}$/);
    }
});

test("every post image exists in public/", () => {
    for (const p of POSTS) {
        assert.ok(p.image.startsWith("assets/images/posts/"), p.image);
        assert.ok(fs.existsSync(new URL(`../public/${p.image}`, import.meta.url)), p.image);
    }
});

test("dates are formatted in the page language, without timezone drift", () => {
    assert.equal(formatPostDate("2026-11-03", "en"), "Nov 3, 2026");
    assert.equal(formatPostDate("2026-11-03", "fr"), "3 nov. 2026");
    assert.equal(formatPostDate("2026-11-03", "pt-BR"), "3 de nov. de 2026");
});

test("every language has the Writing labels and the devcontainer case-study link", () => {
    for (const { code } of LANGUAGES) {
        const t = TRANSLATIONS[code];
        assert.ok(t.nav.writing, code);
        for (const key of ["eyebrow", "title", "subtitle", "all", "read"]) assert.ok(t.writing[key], `${code} writing.${key}`);
        const tile = t.work.items[2];
        assert.equal(tile.href, CASE_STUDY, code);
        assert.ok(tile.cta, code);
        assert.doesNotMatch(JSON.stringify(t.work), /soon|à venir|em breve|caminho/, code);
    }
});
