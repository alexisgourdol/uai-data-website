// Published Substack posts, entered by hand, newest first. Posts are in English in every
// page language. To add one: put its illustration (960px wide, 16:9) in
// public/assets/images/posts/ and add an entry at the top.
export const SUBSTACK_URL = "https://alexisgourdol.substack.com";

export const POSTS = [
    {
        date: "2026-11-12",
        url: `${SUBSTACK_URL}/p/a-firewall-cant-tell-your-test-database`,
        title: "A firewall can't tell your test database from your real one",
        subtitle: "The box around my coding assistant was real. The keys inside it were the wrong ones.",
        image: "assets/images/posts/a-firewall-cant-tell-your-test-database.jpg",
        alt: "A toy sandbox with a ring of keys lying in the sand"
    },
    {
        date: "2026-11-03",
        url: `${SUBSTACK_URL}/p/my-issue-tracker-closed-a-ticket`,
        title: "My issue tracker closed a ticket for work that hadn't shipped",
        subtitle: "One line in a pull request description moved the wrong ticket to Done",
        image: "assets/images/posts/my-issue-tracker-closed-a-ticket.jpg",
        alt: "A toy grabber claw dropping a blank card into a desk sorting rack"
    },
    {
        date: "2026-10-30",
        url: `${SUBSTACK_URL}/p/i-track-my-own-marketing-the-way`,
        title: "I track my own marketing the way I'd tell a client to track anything",
        subtitle: "Every post starts from a folder, not a blank page.",
        image: "assets/images/posts/i-track-my-own-marketing-the-way.jpg",
        alt: "A stack of colourful folders next to a rubber stamp"
    }
];

// "2026-11-03" → "Nov 3, 2026" / "3 nov. 2026" / "3 de nov. de 2026". Formatted in UTC so the
// day never shifts with the visitor's timezone or between the prerender and the browser.
export function formatPostDate(iso, lang) {
    return new Intl.DateTimeFormat(lang, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })
        .format(new Date(`${iso}T00:00:00Z`));
}
