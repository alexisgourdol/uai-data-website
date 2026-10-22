export const TRANSLATIONS = {
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
            eyebrow: "AI integration sprints for small and mid-sized businesses",
            eyebrowShort: "AI integration sprints",
            headline: "AI workflows your team didn't have time to build. I ship them.",
            sub: "I run 4-week AI integration sprints for small and mid-sized businesses. Fixed price, working software at the end, your team owns it.",
            cta1: "Book a free 60-min audit",
            cta2: "Or email: alexis@uaidata.io"
        },
        proof: {
            line: "Ex-COO at Lum Network ($323k TVL, on Cosmos-SDK). VP Project Management at Movinga (€80M raised). Built Scope and bpm-finder with Claude Code. Le Wagon instructor, 100+ data students."
        },
        offer: {
            eyebrow: "Offer",
            title: "Two ways to work with me.",
            subtitle: "One free call to figure out what to ship. One four-week sprint to ship it.",
            cards: [
                {
                    kicker: "Audit · Free",
                    title: "AI Readiness Audit",
                    body: "Free 60-min call. 1-page written recap within 24 hours, with the 3 concrete next steps your team should ship first. No commitment to a sprint.",
                    best: "Best for: owners and managers who want a senior outside read on where to start, not a \"strategic roadmap\" that ends up in a drawer.",
                    cta: "Book the free audit",
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
            tools: ["Claude Code", "Python", "TypeScript", "Next.js", "PostgreSQL", "DuckDB", "devcontainers", "HubSpot", "Intercom", "Slack", "Notion", "Linear"],
            devcontainer: "Sandboxed devcontainers: AI tooling gets access to what the task needs, nothing it shouldn't touch.",
            footnote: "If your stack isn't in this list, send me an email and I'll tell you honestly whether I'm the right person for it."
        },
        work: {
            eyebrow: "Work",
            title: "Recent work.",
            subtitle: "Three tiles. Two live. One write-up coming.",
            items: [
                {
                    name: "Scope",
                    status: "in daily use",
                    desc: "Issue tracker built in a week with Claude Code. The one I use to run my own work every day.",
                    href: null,
                    cta: null
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
                    desc: "The sandboxed devcontainer setup that scopes AI tooling to the resources it needs — no accidental prod writes, no runaway deletions. Used in production. Write-up coming in week 2.",
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
                "Based in Paris. Working with businesses in Brazil and the US. Open to traveling."
            ],
            credentials: "Languages",
            languages: "English · French · Portuguese · Spanish"
        },
        faq: {
            eyebrow: "FAQ",
            title: "Questions business owners ask.",
            items: [
                {
                    q: "How is this different from hiring a fractional CTO or an agency?",
                    a: "Fractionals run your whole engineering org and bill by the hour. Agencies build a system, hand over a black box, and move on. I do one workflow, fixed scope. The difference: your team can read and maintain the code the Monday after delivery, and I stay for a 30-day check-in. You end up with a capability you own, not a dependency on me."
                },
                {
                    q: "What if my team is non-technical?",
                    a: "Most small and mid-sized businesses don't have a senior engineer in the room. The handover doc and the 30-day check-in are designed for exactly this."
                },
                {
                    q: "Can you work with our data security or compliance requirements?",
                    a: "Yes. The devcontainer pattern scopes what AI tooling can reach — relevant resources in, everything else out. We talk through the specifics on the audit call."
                },
                {
                    q: "Do you do retainers?",
                    a: "No. Retainers reward the consultant for billing time; sprints reward both of us for shipping. If you want a long-term relationship, we run consecutive sprints."
                },
                {
                    q: "Where are you based, and can you travel?",
                    a: "Paris. I work remotely with clients in Brazil and the US, and travel for the kickoff if it matters to you."
                },
                {
                    q: "What if our project is bigger than 4 weeks?",
                    a: "We scope it into a sequence of sprints, each with a working deliverable. Easier to manage, easier to stop."
                },
                {
                    q: "Why is it called UAI DATA?",
                    a: "UAI (pronounced 'why') is a common expression from Minas Gerais, Brazil — where I'm partly from. It means surprise, curiosity, or just 'huh!' — the reaction I want people to have when they see what AI can actually do for their operations."
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
            copy: "© 2026 uai data.",
            cta: "Want a senior outside read on where to start with AI?",
            sub: "The audit is free and takes an hour. You leave with three concrete next steps your team can act on this week.",
            book: "Book the free audit"
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
            eyebrow: "Sprints d'intégration IA pour PME",
            eyebrowShort: "Sprints d'intégration IA",
            headline: "Les workflows IA que votre équipe n'a pas eu le temps de construire. Je les livre.",
            sub: "Je conduis des sprints d'intégration IA de 4 semaines pour les PME. Prix fixe, logiciel fonctionnel à la fin, votre équipe en est propriétaire.",
            cta1: "Réserver un audit gratuit de 60 min",
            cta2: "Ou par email : alexis@uaidata.io"
        },
        proof: {
            line: "Ancien COO chez Lum Network ($323k TVL, sur Cosmos-SDK). VP Project Management chez Movinga (80M€ levés). Auteur de Scope et bpm-finder avec Claude Code. Instructeur Le Wagon, 100+ étudiants data."
        },
        offer: {
            eyebrow: "Offre",
            title: "Deux façons de travailler avec moi.",
            subtitle: "Un appel gratuit pour décider quoi livrer. Un sprint de quatre semaines pour le livrer.",
            cards: [
                {
                    kicker: "Audit · Gratuit",
                    title: "Audit AI Readiness",
                    body: "Appel gratuit de 60 min. Compte-rendu écrit d'une page sous 24h, avec les 3 prochaines étapes concrètes à livrer. Sans engagement sur un sprint.",
                    best: "Pour les dirigeants qui veulent un regard senior extérieur sur le point de départ, pas une \"feuille de route stratégique\" qui finit dans un tiroir.",
                    cta: "Réserver l'audit gratuit",
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
            tools: ["Claude Code", "Python", "TypeScript", "Next.js", "PostgreSQL", "DuckDB", "devcontainers", "HubSpot", "Intercom", "Slack", "Notion", "Linear"],
            devcontainer: "Devcontainers sandboxés : l'outillage IA accède uniquement à ce dont la tâche a besoin, rien de plus.",
            footnote: "Si votre stack n'est pas dans cette liste, écrivez-moi et je vous dirai honnêtement si je suis la bonne personne."
        },
        work: {
            eyebrow: "Réalisations",
            title: "Réalisations récentes.",
            subtitle: "Trois tuiles. Deux en ligne. Un write-up à venir.",
            items: [
                {
                    name: "Scope",
                    status: "utilisé au quotidien",
                    desc: "Issue tracker construit en une semaine avec Claude Code. Celui que j'utilise pour piloter mon propre travail.",
                    href: null,
                    cta: null
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
                    desc: "Le setup devcontainer sandboxé qui restreint l'accès de l'outillage IA aux ressources pertinentes — pas d'écritures prod accidentelles, pas de suppressions incontrôlées. Utilisé en production. Write-up à venir en semaine 2.",
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
                "Basé à Paris. Je travaille avec des entreprises au Brésil et aux États-Unis. Ouvert aux déplacements."
            ],
            credentials: "Langues",
            languages: "Anglais · Français · Portugais · Espagnol"
        },
        faq: {
            eyebrow: "FAQ",
            title: "Questions que posent les dirigeants.",
            items: [
                {
                    q: "En quoi est-ce différent d'un CTO fractionnel ou d'une agence ?",
                    a: "Un fractionnel pilote toute votre ingénierie et facture à l'heure. Une agence construit un système, vous remet une boîte noire et passe à autre chose. Moi je fais un workflow, périmètre fixe. La différence : votre équipe peut lire et maintenir le code le lundi suivant la livraison, et je reste disponible 30 jours après. Vous repartez avec une capacité que vous possédez, pas une dépendance envers moi."
                },
                {
                    q: "Et si mon équipe est non-technique ?",
                    a: "La plupart des PME n'ont pas d'ingénieur senior en interne. Le doc de passation et le point à 30 jours sont conçus pour ça."
                },
                {
                    q: "Pouvez-vous travailler avec nos contraintes data ou compliance ?",
                    a: "Oui. Le pattern devcontainer restreint ce que l'outillage IA peut atteindre — ressources pertinentes incluses, tout le reste exclu. On parle des spécificités pendant l'audit."
                },
                {
                    q: "Faites-vous des retainers ?",
                    a: "Non. Les retainers récompensent le consultant pour facturer du temps ; les sprints nous récompensent tous les deux pour livrer. Pour une relation longue, on enchaîne les sprints."
                },
                {
                    q: "Où êtes-vous basé, et pouvez-vous vous déplacer ?",
                    a: "Paris. Je travaille à distance avec des clients au Brésil et aux États-Unis, et je me déplace pour le kickoff si c'est important pour vous."
                },
                {
                    q: "Et si notre projet fait plus que 4 semaines ?",
                    a: "On le découpe en une séquence de sprints, chacun avec un livrable fonctionnel. Plus simple à piloter, plus simple à arrêter."
                },
                {
                    q: "Pourquoi UAI DATA ?",
                    a: "UAI (prononcé 'ouaï') est une expression courante du Minas Gerais, au Brésil — d'où je suis en partie. Ça signifie la surprise, la curiosité, ou juste 'ah bon !' — la réaction que je veux que les gens aient quand ils voient ce que l'IA peut vraiment faire pour leurs opérations."
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
            copy: "© 2026 uai data.",
            cta: "Vous voulez un regard senior extérieur sur où commencer avec l'IA ?",
            sub: "L'audit est gratuit et dure une heure. Vous repartez avec trois prochaines étapes concrètes que votre équipe peut activer cette semaine.",
            book: "Réserver l'audit gratuit"
        }
    },

    "pt-BR": {
        nav: {
            logo: "uai data",
            offer: "Oferta",
            sprint: "Sprint",
            work: "Projetos",
            about: "Sobre",
            faq: "FAQ",
            contact: "Contato",
            cta: "Agendar o diagnóstico"
        },
        hero: {
            eyebrow: "Sprints de integração de IA para pequenas e médias empresas",
            eyebrowShort: "Sprints de integração de IA",
            headline: "Os workflows de IA que seu time não teve tempo de construir. Eu entrego.",
            sub: "Conduzo sprints de integração de IA de 4 semanas para pequenas e médias empresas. Preço fechado, software funcionando no final, e o código é do seu time.",
            cta1: "Agendar um diagnóstico gratuito de 60 min",
            cta2: "Ou por e-mail: alexis@uaidata.io"
        },
        proof: {
            line: "Ex-COO da Lum Network ($323k TVL, em Cosmos-SDK). VP de Project Management na Movinga (€80M captados). Criei o Scope e o bpm-finder com Claude Code. Professor na Le Wagon, 100+ alunos de dados."
        },
        offer: {
            eyebrow: "Oferta",
            title: "Duas formas de trabalhar comigo.",
            subtitle: "Uma conversa gratuita para definir o que entregar. Um sprint de quatro semanas para entregar.",
            cards: [
                {
                    kicker: "Diagnóstico · Gratuito",
                    title: "Diagnóstico AI Readiness",
                    body: "Conversa gratuita de 60 min. Resumo escrito de uma página em até 24 horas, com os 3 próximos passos concretos que seu time deve entregar primeiro. Sem compromisso com um sprint.",
                    best: "Ideal para: donos e gestores que querem um olhar sênior de fora sobre por onde começar, e não um \"roadmap estratégico\" que acaba esquecido na gaveta.",
                    cta: "Agendar o diagnóstico gratuito",
                    href: "https://calendar.app.google/1PBpmZw9S5cVDVb26"
                },
                {
                    kicker: "Sprint",
                    title: "Sprint AI Workflow",
                    body: "4 semanas. Preço fechado (definimos o escopo numa conversa). No final, você tem uma integração funcionando no seu stack, um pipeline que seu time consegue manter na segunda-feira de manhã e um playbook escrito para a próxima iteração.",
                    best: "Ideal para: times que já decidiram o que entregar e precisam de alguém que realmente entregue.",
                    cta: "Conversar sobre um sprint",
                    href: "mailto:alexis@uaidata.io?subject=Sprint%20AI%20Workflow"
                }
            ]
        },
        sprint: {
            eyebrow: "Como funciona",
            title: "Como funciona um sprint.",
            subtitle: "Quatro etapas, uma frase cada. Sem jargão.",
            steps: [
                { week: "Semana 0", title: "Escopo.", body: "Definimos juntos o resultado único, os pontos de integração e a métrica de sucesso. Você recebe um documento de escopo de uma página antes de qualquer trabalho começar." },
                { week: "Semana 1", title: "Spike.", body: "Construo a versão end-to-end mais enxuta que prova que o workflow funciona. Revisamos na sexta-feira." },
                { week: "Semanas 2-3", title: "Entrega.", body: "Integro no seu stack real, escrevo os testes e reforço os pontos frágeis que seu time vai encontrar na segunda-feira." },
                { week: "Semana 4", title: "Handover.", body: "Documentação, um playbook para a próxima iteração e um check-in em 30 dias. A partir daí, é do seu time." }
            ]
        },
        stack: {
            eyebrow: "Stack",
            title: "O stack que eu realmente uso.",
            tools: ["Claude Code", "Python", "TypeScript", "Next.js", "PostgreSQL", "DuckDB", "devcontainers", "HubSpot", "Intercom", "Slack", "Notion", "Linear"],
            devcontainer: "Devcontainers isolados: as ferramentas de IA acessam só o que a tarefa precisa, nada além disso.",
            footnote: "Se o seu stack não está nesta lista, me mande um e-mail e eu digo com honestidade se sou a pessoa certa."
        },
        work: {
            eyebrow: "Projetos",
            title: "Projetos recentes.",
            subtitle: "Três projetos. Dois no ar. Um case a caminho.",
            items: [
                {
                    name: "Scope",
                    status: "em uso diário",
                    desc: "Issue tracker construído em uma semana com Claude Code. É o que eu uso todo dia para gerenciar meu próprio trabalho.",
                    href: null,
                    cta: null
                },
                {
                    name: "bpm-finder",
                    status: "no ar",
                    desc: "Descubra o BPM de qualquer música pelo microfone ou por um arquivo de áudio. Construído e publicado em menos de uma hora, principalmente para provar que o stack de IA funcionava de ponta a ponta num problema não trivial.",
                    href: "https://bpmfinder-web.vercel.app/",
                    cta: "Testar"
                },
                {
                    name: "Padrão devcontainer Claude Code",
                    status: "case em breve",
                    desc: "O setup de devcontainer isolado que restringe as ferramentas de IA aos recursos de que precisam — sem escritas acidentais em produção, sem exclusões descontroladas. Usado em produção. Case completo na semana 2.",
                    href: null,
                    cta: null
                }
            ]
        },
        about: {
            eyebrow: "Sobre",
            title: "Sobre o Alexis.",
            body: [
                "Sou um operador franco-brasileiro que virou consultor de integração de IA. Passei 10 anos construindo e tocando operações em startups (Movinga, Jobmaker, Lum Network, Tripda). Em 2024 mergulhei no bootcamp de data engineering da Le Wagon e comecei a entregar workflows de IA em produção com Claude Code.",
                "A combinação é o ponto. A maioria dos \"consultores de IA\" não sabe entregar código. A maioria dos engenheiros não sabe ler uma DRE nem desenhar um processo de vendas. Eu faço os dois, e mantenho o escopo pequeno o bastante para que o que é construído seja de fato usado.",
                "Baseado em Paris. Trabalho com empresas no Brasil e nos EUA. Disponível para viajar."
            ],
            credentials: "Idiomas",
            languages: "Inglês · Francês · Português · Espanhol"
        },
        faq: {
            eyebrow: "FAQ",
            title: "Perguntas que os empresários fazem.",
            items: [
                {
                    q: "Qual a diferença em relação a contratar um CTO fracionado ou uma agência?",
                    a: "Um CTO fracionado comanda toda a sua engenharia e cobra por hora. Uma agência constrói um sistema, entrega uma caixa-preta e segue em frente. Eu faço um workflow, com escopo fechado. A diferença: seu time consegue ler e manter o código na segunda-feira seguinte à entrega, e eu fico disponível para um check-in em 30 dias. Você sai com uma capacidade que é sua, não com uma dependência de mim."
                },
                {
                    q: "E se o meu time não for técnico?",
                    a: "A maioria das pequenas e médias empresas não tem um engenheiro sênior na equipe. O documento de handover e o check-in de 30 dias foram pensados exatamente para isso."
                },
                {
                    q: "Você consegue trabalhar com nossos requisitos de segurança de dados ou compliance?",
                    a: "Sim. O padrão devcontainer limita o que as ferramentas de IA conseguem acessar — recursos relevantes dentro, todo o resto fora. Falamos dos detalhes na conversa de diagnóstico."
                },
                {
                    q: "Você trabalha com retainer?",
                    a: "Não. Retainers recompensam o consultor por faturar horas; sprints recompensam nós dois por entregar. Se você quer uma relação de longo prazo, fazemos sprints consecutivos."
                },
                {
                    q: "Onde você está baseado, e pode viajar?",
                    a: "Paris. Trabalho remotamente com clientes no Brasil e nos EUA, e viajo para o kickoff se isso for importante para você."
                },
                {
                    q: "E se o nosso projeto for maior que 4 semanas?",
                    a: "Dividimos em uma sequência de sprints, cada um com uma entrega funcionando. Mais fácil de gerenciar, mais fácil de parar."
                },
                {
                    q: "Por que o nome UAI DATA?",
                    a: "UAI é uma expressão típica de Minas Gerais — de onde eu sou em parte. Expressa surpresa, curiosidade, ou só um 'ué!' — a reação que eu quero que as pessoas tenham quando veem o que a IA pode realmente fazer pelas operações delas."
                }
            ]
        },
        finalCta: {
            title: "Quer um olhar sênior de fora sobre por onde começar com IA?",
            body: "O diagnóstico dura uma hora. Você sai com três próximos passos concretos que seu time pode colocar em prática nesta semana.",
            cta: "Agendar o diagnóstico",
            sub: "Ou me escreva diretamente: alexis@uaidata.io. Eu leio tudo."
        },
        footer: {
            tagline: "UAI DATA — Alexis Gourdol",
            location: "Paris, França · alexis@uaidata.io",
            copy: "© 2026 uai data.",
            cta: "Quer um olhar sênior de fora sobre por onde começar com IA?",
            sub: "O diagnóstico é gratuito e dura uma hora. Você sai com três próximos passos concretos que seu time pode colocar em prática nesta semana.",
            book: "Agendar o diagnóstico gratuito"
        }
    }
};

// Switcher order and labels. The Brazilian Portuguese button reads "BR", not "PT".
export const LANGUAGES = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "pt-BR", label: "BR" }
];
