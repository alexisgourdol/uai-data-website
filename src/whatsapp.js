// WhatsApp contact link (SCP-59). The number is kept in pieces and joined only when
// the link is built on click, so it never sits whole in the prerendered HTML or the
// bundle, where scrapers look for phone numbers. Pure so it runs under `node --test`.
const PARTS = ["33", "769", "814", "131"];

export function whatsappUrl(message) {
    return "https://wa.me/" + PARTS.join("") + "?text=" + encodeURIComponent(message);
}
