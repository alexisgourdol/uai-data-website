import { test } from "node:test";
import assert from "node:assert/strict";
import { pickLanguage, urlWithoutLang } from "./lang.js";

const pick = (opts) => pickLanguage({ search: "", stored: null, browserLanguages: [], ...opts });

test("defaults to English", () => {
    assert.equal(pick({}), "en");
});

test("URL parameter wins over everything", () => {
    assert.equal(pick({ search: "?lang=pt-BR", stored: "fr", browserLanguages: ["fr-FR"] }), "pt-BR");
    assert.equal(pick({ search: "?utm_source=linkedin&lang=fr" }), "fr");
});

test("URL parameter is case-insensitive", () => {
    assert.equal(pick({ search: "?lang=pt-br" }), "pt-BR");
    assert.equal(pick({ search: "?lang=FR" }), "fr");
});

test("unknown URL parameter is ignored", () => {
    assert.equal(pick({ search: "?lang=de", stored: "fr" }), "fr");
    assert.equal(pick({ search: "?lang=", browserLanguages: ["pt"] }), "pt-BR");
});

test("stored choice wins over browser language", () => {
    assert.equal(pick({ stored: "en", browserLanguages: ["pt-BR"] }), "en");
});

test("invalid stored value is ignored", () => {
    assert.equal(pick({ stored: "xx", browserLanguages: ["fr-CA"] }), "fr");
});

test("browser language: any Portuguese maps to BR, any French to FR", () => {
    assert.equal(pick({ browserLanguages: ["pt-PT"] }), "pt-BR");
    assert.equal(pick({ browserLanguages: ["pt"] }), "pt-BR");
    assert.equal(pick({ browserLanguages: ["fr-BE", "en"] }), "fr");
});

test("browser language: first supported entry wins", () => {
    assert.equal(pick({ browserLanguages: ["de-DE", "fr", "pt-BR"] }), "fr");
    assert.equal(pick({ browserLanguages: ["en-US", "pt-BR"] }), "en");
    assert.equal(pick({ browserLanguages: ["de-DE", "es"] }), "en");
});

test("urlWithoutLang drops only the lang parameter", () => {
    assert.equal(urlWithoutLang("/?lang=fr"), "/");
    assert.equal(urlWithoutLang("/?utm_source=x&lang=fr#faq"), "/?utm_source=x#faq");
    assert.equal(urlWithoutLang("/#faq"), "/#faq");
});
