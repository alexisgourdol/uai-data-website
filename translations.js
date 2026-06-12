const TRANSLATIONS = {
    en: {
        nav: {
            logo: "uai data",
            offer: "Offer",
            sprint: "Sprint",
            work: "Work",
            about: "About",
            faq: "FAQ",
            contact: "Contact",
            cta: "Book the audit"
        },
        hero: {
            eyebrow: "AI integration sprints for B2B SaaS founders",
            eyebrowShort: "AI integration sprints",
            headline: "AI workflows your team didn't have time to build. I ship them.",
            sub: "I run 4-week AI integration sprints for B2B SaaS founders. Fixed price, working software at the end, your team owns it.",
            cta1: "Book a 60-min audit",
            cta2: "Or email: alexis@uaidata.io"
        },
        proof: {
            line: "Ex-COO at Lum Network ($323k TVL, on Cosmos-SDK). VP Project Management at Movinga (€80M raised). Built scope.pro and bpm-finder with Claude Code. Le Wagon instructor, 100+ data students."
        },
        offer: {
            eyebrow: "Offer",
            title: "Two ways to work with me.",
            subtitle: "One short engagement to figure out what to ship. One four-week sprint to ship it.",
            cards: [
                {
                    kicker: "Audit",
                    title: "AI Readiness Audit",
                    body: "60-min call. 1-page written recap within 24 hours, with the 3 concrete next steps your team should ship first. If we work together on the sprint within 30 days, the audit fee credits to the sprint.",
                    best: "Best for: founders who want a senior outside read on where to start, not a \"strategic roadmap\" that ends up in a drawer.",
                    cta: "Book the audit",
                    href: "https://calendar.app.google/1PBpmZw9S5cVDVb26"
                },
                {
                    kicker: "Sprint",
                    title: "AI Workflow Sprint",
                    body: "4 weeks. Fixed price (we scope on a call). At the end you have a working integration deployed in your stack, a pipeline your team can maintain on Monday morning, and a written playbook for the next iteration.",
                    best: "Best for: teams that have decided what to ship and need someone who will actually ship it.",
                    cta: "Talk about a sprint",
                    href: "mailto:alexis@uaidata.io?subject=AI%20Workflow%20Sprint"
                }
            ]
        },
        sprint: {
            eyebrow: "How it runs",
            title: "How a sprint runs.",
            subtitle: "Four steps, one sentence each. No jargon.",
            steps: [
                { week: "Week 0", title: "Scope.", body: "We agree on the one outcome, the integration points, and the success metric. You get a one-page scope doc before any work starts." },
                { week: "Week 1", title: "Spike.", body: "I build the thinnest end-to-end version that proves the workflow works. We review on Friday." },
                { week: "Weeks 2-3", title: "Ship.", body: "I integrate against your real stack, write tests, and harden the edges your team will hit on Monday." },
                { week: "Week 4", title: "Handover.", body: "Documentation, a playbook for the next iteration, and a 30-day check-in. Your team owns it from there." }
            ]
        },
        stack: {
            eyebrow: "Stack",
            title: "The stack I actually use.",
            body: "Claude Code (Anthropic), Python, TypeScript, Next.js. Sandboxed devcontainers so AI tooling can't reach your prod credentials. PostgreSQL or whatever you already run. HubSpot, Intercom, Slack, Notion, Linear, wired in where they need to be.",
            footnote: "If your stack isn't in this list, send me an email and I'll tell you honestly whether I'm the right person for it."
        },
        work: {
            eyebrow: "Work",
            title: "Recent work.",
            subtitle: "Three tiles. Two live. One write-up coming.",
            items: [
                {
                    name: "scope.pro",
                    status: "live",
                    desc: "Issue tracker built in a week with Claude Code. The one I use to run my own work every day. The main app is SSO-only; a public read-only demo is available.",
                    href: "https://scope-gamma-seven.vercel.app/issues",
                    cta: "See the demo"
                },
                {
                    name: "bpm-finder",
                    status: "live",
                    desc: "Find the BPM of any song via mic or audio file. Built and deployed in under an hour, mostly to prove the AI-tooling stack worked end-to-end on a non-trivial problem.",
                    href: "https://bpmfinder-web.vercel.app/",
                    cta: "Try it"
                },
                {
                    name: "Claude Code devcontainer pattern",
                    status: "case study soon",
                    desc: "The sandboxed devcontainer setup that lets a small team run Claude Code without giving it production credentials or breaking the firewall. Used in production. Write-up published in week 2.",
                    href: null,
                    cta: null
                }
            ]
        },
        about: {
            eyebrow: "About",
            title: "About Alexis.",
            body: [
                "I'm a French-Brazilian operator turned AI-integration consultant. I spent 10 years building and running ops at startups (Movinga, Jobmaker, Lum Network, Tripda). In 2024 I went deep on Le Wagon's data-engineering bootcamp and started shipping production AI workflows with Claude Code.",
                "The combination is the point. Most \"AI consultants\" can't ship code. Most engineers can't read a P&L or design a sales process. I do both, and I keep the scope small enough that what gets built actually gets used.",
                "Based in Paris. Working with US and EU founders. Open to traveling."
            ],
            credentials: "Languages",
            languages: "English · French · Portuguese · Spanish"
        },
        faq: {
            eyebrow: "FAQ",
            title: "Questions founders ask.",
            items: [
                {
                    q: "How is this different from hiring a fractional CTO or an agency?",
                    a: "Fractionals usually run your whole engineering side and bill by the hour. Agencies build the thing and leave. I do one workflow, fixed price, four weeks, and you own it at the end."
                },
                {
                    q: "What if my team is non-technical?",
                    a: "Half my work is with founder-led teams where there's no senior engineer in the room. The handover doc and the 30-day check-in are designed for exactly this."
                },
                {
                    q: "Can you work with our data security or compliance requirements?",
                    a: "Yes. The devcontainer pattern is specifically built for teams that can't hand prod credentials to AI tools. We talk through scope on the audit call."
                },
                {
                    q: "Do you do retainers?",
                    a: "No. Retainers reward the consultant for billing time; sprints reward both of us for shipping. If you want a long-term relationship, we run consecutive sprints."
                },
                {
                    q: "Where are you based, and can you travel?",
                    a: "Paris. I work remotely with US and EU clients, and travel for the kickoff if it matters to you."
                },
                {
                    q: "What if our project is bigger than 4 weeks?",
                    a: "We scope it into a sequence of sprints, each with a working deliverable. Easier to manage, easier to stop."
                }
            ]
        },
        finalCta: {
            title: "Want a senior outside read on where to start with AI?",
            body: "The audit takes an hour. You leave with three concrete next steps your team can act on this week.",
            cta: "Book the audit",
            sub: "Or email me directly: alexis@uaidata.io. I read everything."
        },
        footer: {
            tagline: "UAI DATA — Alexis Gourdol",
            location: "Paris, France · alexis@uaidata.io",
            copy: "© 2026 uai data."
        }
    },

    fr: {
        nav: {
            logo: "uai data",
            offer: "Offre",
            sprint: "Sprint",
            work: "Réalisations",
            about: "À propos",
            faq: "FAQ",
            contact: "Contact",
            cta: "Réserver l'audit"
        },
        hero: {
            eyebrow: "Sprints d'intégration IA pour fondateurs B2B SaaS",
            eyebrowShort: "Sprints d'intégration IA",
            headline: "Les workflows IA que votre équipe n'a pas eu le temps de construire. Je les livre.",
            sub: "Je conduis des sprints d'intégration IA de 4 semaines pour fondateurs B2B SaaS. Prix fixe, logiciel fonctionnel à la fin, votre équipe en est propriétaire.",
            cta1: "Réserver un audit de 60 min",
            cta2: "Ou par email : alexis@uaidata.io"
        },
        proof: {
            line: "Ancien COO chez Lum Network ($323k TVL, sur Cosmos-SDK). VP Project Management chez Movinga (80M€ levés). Auteur de scope.pro et bpm-finder avec Claude Code. Instructeur Le Wagon, 100+ étudiants data."
        },
        offer: {
            eyebrow: "Offre",
            title: "Deux façons de travailler avec moi.",
            subtitle: "Une mission courte pour décider quoi livrer. Un sprint de quatre semaines pour le livrer.",
            cards: [
                {
                    kicker: "Audit",
                    title: "Audit AI Readiness",
                    body: "Appel de 60 min. Compte-rendu écrit d'une page sous 24h, avec les 3 prochaines étapes concrètes à livrer. Si nous travaillons ensemble sur un sprint dans les 30 jours, le prix de l'audit est crédité sur le sprint.",
                    best: "Pour les fondateurs qui veulent un regard senior extérieur sur le point de départ, pas une \"feuille de route stratégique\" qui finit dans un tiroir.",
                    cta: "Réserver l'audit",
                    href: "https://calendar.app.google/1PBpmZw9S5cVDVb26"
                },
                {
                    kicker: "Sprint",
                    title: "Sprint AI Workflow",
                    body: "4 semaines. Prix fixe (on cadre lors d'un appel). À la fin, vous avez une intégration fonctionnelle déployée dans votre stack, une pipeline que votre équipe peut maintenir le lundi matin, et un playbook écrit pour l'itération suivante.",
                    best: "Pour les équipes qui ont décidé quoi livrer et veulent quelqu'un qui livre vraiment.",
                    cta: "Parler du sprint",
                    href: "mailto:alexis@uaidata.io?subject=Sprint%20AI%20Workflow"
                }
            ]
        },
        sprint: {
            eyebrow: "Déroulé",
            title: "Comment se déroule un sprint.",
            subtitle: "Quatre étapes, une phrase chacune. Pas de jargon.",
            steps: [
                { week: "Semaine 0", title: "Cadrage.", body: "On se met d'accord sur l'unique résultat, les points d'intégration, et la métrique de succès. Vous recevez un document de cadrage d'une page avant tout travail." },
                { week: "Semaine 1", title: "Spike.", body: "Je construis la version end-to-end la plus fine qui prouve que le workflow fonctionne. On fait le point le vendredi." },
                { week: "Semaines 2-3", title: "Livraison.", body: "J'intègre dans votre stack réelle, j'écris les tests, et je durcis les bords que votre équipe va rencontrer le lundi." },
                { week: "Semaine 4", title: "Passation.", body: "Documentation, playbook pour l'itération suivante, et un point à 30 jours. Votre équipe est ensuite propriétaire." }
            ]
        },
        stack: {
            eyebrow: "Stack",
            title: "La stack que j'utilise vraiment.",
            body: "Claude Code (Anthropic), Python, TypeScript, Next.js. Devcontainers sandboxés pour que l'outillage IA n'atteigne pas vos credentials prod. PostgreSQL ou ce que vous utilisez déjà. HubSpot, Intercom, Slack, Notion, Linear, branchés où nécessaire.",
            footnote: "Si votre stack n'est pas dans cette liste, écrivez-moi et je vous dirai honnêtement si je suis la bonne personne."
        },
        work: {
            eyebrow: "Réalisations",
            title: "Réalisations récentes.",
            subtitle: "Trois tuiles. Deux en ligne. Un write-up à venir.",
            items: [
                {
                    name: "scope.pro",
                    status: "en ligne",
                    desc: "Issue tracker construit en une semaine avec Claude Code. Celui que j'utilise pour piloter mon propre travail. L'app principale est en SSO ; une démo publique en lecture seule est disponible.",
                    href: "https://scope-gamma-seven.vercel.app/issues",
                    cta: "Voir la démo"
                },
                {
                    name: "bpm-finder",
                    status: "en ligne",
                    desc: "Trouver le BPM de n'importe quelle chanson via micro ou fichier audio. Construit et déployé en moins d'une heure, surtout pour prouver que la stack IA marchait end-to-end sur un problème non-trivial.",
                    href: "https://bpmfinder-web.vercel.app/",
                    cta: "Essayer"
                },
                {
                    name: "Pattern devcontainer Claude Code",
                    status: "case study à venir",
                    desc: "Le setup devcontainer sandboxé qui permet à une petite équipe d'utiliser Claude Code sans lui confier les credentials prod ni casser le firewall. Utilisé en production. Write-up publié en semaine 2.",
                    href: null,
                    cta: null
                }
            ]
        },
        about: {
            eyebrow: "À propos",
            title: "À propos d'Alexis.",
            body: [
                "Je suis un opérateur franco-brésilien devenu consultant en intégration IA. J'ai passé 10 ans à construire et faire tourner les opérations de startups (Movinga, Jobmaker, Lum Network, Tripda). En 2024, j'ai fait le bootcamp data-engineering de Le Wagon et j'ai commencé à livrer des workflows IA en production avec Claude Code.",
                "La combinaison est le sujet. La plupart des \"consultants IA\" ne savent pas livrer du code. La plupart des ingénieurs ne savent pas lire un P&L ni concevoir un processus de vente. Je fais les deux, et je garde un périmètre assez petit pour que ce qui est construit soit vraiment utilisé.",
                "Basé à Paris. Je travaille avec des fondateurs US et UE. Ouvert aux déplacements."
            ],
            credentials: "Langues",
            languages: "Anglais · Français · Portugais · Espagnol"
        },
        faq: {
            eyebrow: "FAQ",
            title: "Questions que posent les fondateurs.",
            items: [
                {
                    q: "En quoi est-ce différent d'un CTO fractionnel ou d'une agence ?",
                    a: "Un fractionnel pilote toute votre ingénierie et facture à l'heure. Une agence construit la chose et part. Moi je livre un workflow, prix fixe, quatre semaines, et vous en êtes propriétaire à la fin."
                },
                {
                    q: "Et si mon équipe est non-technique ?",
                    a: "La moitié de mes missions sont avec des équipes fondateur-led sans ingénieur senior. Le doc de passation et le point à 30 jours sont conçus pour ça."
                },
                {
                    q: "Pouvez-vous travailler avec nos contraintes data ou compliance ?",
                    a: "Oui. Le pattern devcontainer est spécifiquement construit pour les équipes qui ne peuvent pas confier de credentials prod à des outils IA. On en parle pendant l'audit."
                },
                {
                    q: "Faites-vous des retainers ?",
                    a: "Non. Les retainers récompensent le consultant pour facturer du temps ; les sprints nous récompensent tous les deux pour livrer. Pour une relation longue, on enchaîne les sprints."
                },
                {
                    q: "Où êtes-vous basé, et pouvez-vous vous déplacer ?",
                    a: "Paris. Je travaille à distance avec des clients US et UE, et je me déplace pour le kickoff si c'est important pour vous."
                },
                {
                    q: "Et si notre projet fait plus que 4 semaines ?",
                    a: "On le découpe en une séquence de sprints, chacun avec un livrable fonctionnel. Plus simple à piloter, plus simple à arrêter."
                }
            ]
        },
        finalCta: {
            title: "Vous voulez un regard senior extérieur sur où commencer avec l'IA ?",
            body: "L'audit dure une heure. Vous repartez avec trois prochaines étapes concrètes que votre équipe peut activer cette semaine.",
            cta: "Réserver l'audit",
            sub: "Ou écrivez-moi directement : alexis@uaidata.io. Je lis tout."
        },
        footer: {
            tagline: "UAI DATA — Alexis Gourdol",
            location: "Paris, France · alexis@uaidata.io",
            copy: "© 2026 uai data."
        }
    }
};
