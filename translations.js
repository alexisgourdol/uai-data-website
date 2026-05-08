const TRANSLATIONS = {
    en: {
        nav: {
            logo: "uai data",
            services: "Services",
            portfolio: "Portfolio",
            about: "About",
            blog: "Blog",
            contact: "Contact",
            cta: "Book a call"
        },
        hero: {
            eyebrow: "Freelance data analyst · Available for projects",
            headline: "I help growing companies make better decisions with their data",
            sub: "Freelance data analyst with a startup operations background. I turn messy spreadsheets and scattered databases into clear, concrete answers.",
            cta1: "Book a discovery call",
            cta2: "See my work"
        },
        services: {
            title: "What I do",
            subtitle: "One-off analysis or ongoing support — I can step in at any point in the process.",
            items: [
                { title: "Operational Analytics", desc: "Use your operational data to find where things break down and what's actually worth tracking." },
                { title: "Churn & Retention Analysis", desc: "Understand why customers leave and what keeps them. Retention strategies built on what your data actually shows, not assumptions." },
                { title: "Dashboards & Reporting", desc: "Transform raw data into visual dashboards your team actually uses — whether it's KPI tracking or monthly exec reports." },
                { title: "Data Cleanup & Migration", desc: "Messy data? Switching tools? I handle data mapping, validation, and clean migrations between systems." }
            ]
        },
        portfolio: {
            title: "Selected work",
            subtitle: "A sample of recent projects. Most client work is anonymized or under NDA.",
            nda: "Client under NDA",
            viewGithub: "View on GitHub →",
            items: [
                {
                    title: "ATS Data Migration",
                    desc: "Led the migration of thousands of candidate records between applicant tracking systems. Data mapping, validation, and zero-loss transfer across complex relational data.",
                    tags: ["Migration", "Python", "Data Quality"],
                    github: false
                },
                {
                    title: "Financial Scenario Simulator",
                    desc: "Built a multi-scenario financial simulator for a blockchain company, enabling leadership to model business outcomes under different market conditions.",
                    tags: ["Python", "Simulation", "Financial Modeling"],
                    github: false
                },
                {
                    title: "Operational Analysis Tools",
                    desc: "Built Python notebooks to help a startup dig into their operational data and figure out what to act on.",
                    tags: ["Python", "Jupyter", "Operations"],
                    github: false
                },
                {
                    title: "User Churn Analysis",
                    desc: "Analyzed 15K user records to identify the top predictors of churn through exploratory data analysis, enabling targeted retention strategy.",
                    tags: ["EDA", "Python", "Pandas"],
                    github: true
                }
            ]
        },
        projects: {
            title: "Things I build",
            subtitle: "Side projects — tools I wanted to exist, so I made them.",
            github: "GitHub →",
            demo: "Live demo →",
            items: [
                { name: "ytsum", desc: "YouTube transcript downloader and multi-provider AI summarizer.", github: "https://github.com/alexisgourdol/ytsum" },
                { name: "Scope", desc: "Personal project management tool inspired by Linear's clean design.", github: "https://github.com/alexisgourdol/scope", demo: "https://scope-gamma-seven.vercel.app/issues" },
                { name: "bpm-finder", desc: "Find the BPM of any song instantly — tap or upload audio to detect tempo.", demo: "https://bpmfinder-web.vercel.app/" }
            ]
        },
        about: {
            title: "The person behind the data",
            body: [
                "I'm Alexis — a freelance data analyst based in Paris (France). Before going independent, I spent years in operations at tech startups, where I learned that the best data work starts with understanding the business, not just the SQL query.",
                "I trained in Data Science and Data Engineering at Le Wagon and hold the Google Data Analytics Professional Certificate.",
                "The name 'uai' (pronounced 'why') is a common expression from Minas Gerais, Brazil — where I'm partly from. It means surprise, curiosity, or just 'huh!' — which is exactly the reaction I want people to have when they see what their data can tell them."
            ],
            credentials: "Credentials & training",
            leWagon: "Le Wagon — Data Science & Engineering",
            google: "Google Data Analytics Certificate"
        },
        stats: {
            items: [
                { value: "15K+", label: "Records analyzed" },
                { value: "8+", label: "Years in ops & data" },
                { value: "3", label: "Languages spoken" },
                { value: "100%", label: "NDA compliance" }
            ]
        },
        blog: {
            title: "Writing & insights",
            subtitle: "Occasional writing about data work and startup ops.",
            read: "Read →",
            items: [
                {
                    title: "Why most dashboards fail (and how to fix yours)",
                    date: "Apr 2026",
                    excerpt: "The problem isn't your visualization tool. It's that nobody agreed on what to measure."
                },
                {
                    title: "From spreadsheets to SQL: a migration story",
                    date: "Mar 2026",
                    excerpt: "A behind-the-scenes look at migrating a 5-year-old Excel-based reporting system to a proper database."
                },
                {
                    title: "EDA as a superpower: what I learned from 15K Waze users",
                    date: "Feb 2026",
                    excerpt: "How exploratory data analysis revealed surprising patterns in user behavior — and what it means for retention."
                }
            ]
        },
        faq: {
            title: "Questions & answers",
            items: [
                { q: "What kind of clients do you work with?", a: "Mostly early-stage and growth-stage startups that have accumulated data but haven't had the bandwidth to make sense of it. I also work with small teams inside larger companies who need focused analytical support." },
                { q: "What tools do you use?", a: "Python (Pandas, NumPy, Matplotlib/Seaborn), SQL, Jupyter Notebooks, Metabase, Google Sheets, and Looker Studio. I can adapt to the tools you already use." },
                { q: "Do you work on a fixed price or daily rate?", a: "Both. Short, well-scoped projects work best on a fixed-price basis. Ongoing analytical support typically runs on a retainer or daily rate. We'll figure out what makes the most sense for your project." },
                { q: "How long does a typical project take?", a: "A focused analysis or dashboard build usually takes 1-3 weeks. Larger migrations or ongoing work depend on the scope. I'll give you a clear timeline during our discovery call." },
                { q: "Do you sign NDAs?", a: "Yes, always. Client data and business context are treated with full confidentiality. Most of my portfolio work is anonymized for exactly that reason." }
            ]
        },
        footer: {
            cta: "Let's work together",
            sub: "Whether you have a defined project or just a question about your data, I'm happy to chat.",
            book: "Book a discovery call",
            copy: "© 2026 uai data. All rights reserved."
        }
    },

    fr: {
        nav: {
            logo: "uai data",
            services: "Services",
            portfolio: "Portfolio",
            about: "À propos",
            blog: "Blog",
            contact: "Contact",
            cta: "Prendre contact"
        },
        hero: {
            eyebrow: "Analyste de données freelance · Disponible pour vos missions",
            headline: "J'aide les entreprises en croissance à prendre de meilleures décisions grâce à leurs données",
            sub: "Analyste de données freelance avec un background en opérations startup. Je transforme des feuilles de calcul inexploitables et des bases de données éparpillées en réponses concrètes.",
            cta1: "Réserver un appel découverte",
            cta2: "Voir mes projets"
        },
        services: {
            title: "Ce que je fais",
            subtitle: "Analyse ponctuelle ou support continu — je peux intervenir à n'importe quelle étape du projet.",
            items: [
                { title: "Dashboards & Reporting", desc: "Transformez vos données brutes en tableaux de bord visuels que votre équipe utilise vraiment. Du suivi des KPIs aux rapports de direction." },
                { title: "Analyse Churn & Rétention", desc: "Comprendre pourquoi les clients partent et ce qui les retient. Stratégies de rétention basées sur des patterns réels." },
                { title: "Analytics Opérationnel", desc: "Utilisez vos données opérationnelles pour trouver où ça coince et ce qui vaut vraiment la peine d'être mesuré." },
                { title: "Nettoyage & Migration", desc: "Données en désordre ? Changement d'outils ? Je gère le mapping, la validation et les migrations propres entre systèmes." }
            ]
        },
        portfolio: {
            title: "Missions effectuées",
            subtitle: "Un échantillon de projets récents. La plupart des travaux clients sont anonymisés ou sous NDA.",
            nda: "Client sous NDA",
            viewGithub: "Voir sur GitHub →",
            items: [
                {
                    title: "Migration ATS",
                    desc: "Direction de la migration de milliers de dossiers candidats entre systèmes de suivi. Mapping des données, validation et transfert sans perte dans des données relationnelles complexes.",
                    tags: ["Migration", "Python", "Qualité"],
                    github: false
                },
                {
                    title: "Simulateur Financier",
                    desc: "Construction d'un simulateur multi-scénarios pour une entreprise blockchain, permettant à la direction de modéliser les résultats sous différentes conditions de marché.",
                    tags: ["Python", "Simulation", "Modélisation"],
                    github: false
                },
                {
                    title: "Outils d'Analyse Opérationnelle",
                    desc: "Développement de notebooks Python pour aider une startup à comprendre leurs données opérationnelles et éclairer les priorités.",
                    tags: ["Python", "Jupyter", "Opérations"],
                    github: false
                },
                {
                    title: "Analyse Churn Waze",
                    desc: "Analyse de 15K enregistrements utilisateurs pour identifier les principaux prédicteurs du churn par analyse exploratoire des données.",
                    tags: ["EDA", "Python", "Pandas"],
                    github: true
                }
            ]
        },
        projects: {
            title: "Ce que je construis",
            subtitle: "Projets personnels — des outils que je voulais voir exister, alors je les ai créés.",
            github: "GitHub →",
            demo: "Démo en ligne →",
            items: [
                { name: "ytsum", desc: "Téléchargeur de transcriptions YouTube avec résumé IA multi-fournisseurs.", github: "https://github.com/alexisgourdol/ytsum" },
                { name: "Scope", desc: "Outil de gestion de projet personnel inspiré du design épuré de Linear.", github: "https://github.com/alexisgourdol/scope", demo: "https://scope-gamma-seven.vercel.app/issues" }
            ]
        },
        about: {
            title: "La personne derrière les données",
            body: [
                "Je suis Alexis — analyste de données freelance basé à Paris (France). Avant de travailler en indépendant, j'ai passé plusieurs années en opérations dans des startups tech, où j'ai appris que le meilleur travail analytique commence par comprendre le business, pas juste la requête SQL.",
                "J'ai été formé en Data Science et Data Engineering chez Le Wagon, je détiens le Certificat Professionnel Google Data Analytics.",
                "Le nom 'uai' (prononcé 'ouaï') est une expression courante du Minas Gerais, au Brésil — d'où je suis partiellement originaire. Il exprime la surprise, la curiosité — exactement la réaction que je veux que les gens aient quand ils voient ce que leurs données peuvent leur révéler."
            ],
            credentials: "Formation & certifications",
            leWagon: "Le Wagon — Data Science & Engineering",
            google: "Certificat Google Data Analytics"
        },
        stats: {
            items: [
                { value: "15K+", label: "Enregistrements analysés" },
                { value: "8+", label: "Ans en ops & data" },
                { value: "3", label: "Langues parlées" },
                { value: "100%", label: "Conformité NDA" }
            ]
        },
        blog: {
            title: "Écrits & réflexions",
            subtitle: "Des articles occasionnels sur le travail data et les opérations en startup.",
            read: "Lire →",
            items: [
                {
                    title: "Pourquoi la plupart des dashboards échouent (et comment réparer le vôtre)",
                    date: "Avr 2026",
                    excerpt: "Le problème n'est pas votre outil de visualisation. C'est que personne n'a été d'accord sur ce qu'il fallait mesurer."
                },
                {
                    title: "Des feuilles de calcul au SQL : une histoire de migration",
                    date: "Mar 2026",
                    excerpt: "Un regard en coulisses sur la migration d'un système de reporting Excel vieux de 5 ans vers une vraie base de données."
                },
                {
                    title: "L'EDA comme superpouvoir : ce que j'ai appris de 15K utilisateurs Waze",
                    date: "Fév 2026",
                    excerpt: "Comment l'analyse exploratoire a révélé des patterns surprenants dans le comportement utilisateur."
                }
            ]
        },
        faq: {
            title: "Questions & réponses",
            items: [
                { q: "Avec quels types de clients travaillez-vous ?", a: "Principalement des startups en phase de démarrage ou de croissance qui ont accumulé des données mais n'ont pas eu le temps de les exploiter. Je travaille aussi avec de petites équipes au sein de grandes entreprises qui ont besoin d'aide analytique ciblée." },
                { q: "Quels outils utilisez-vous ?", a: "Python (Pandas, NumPy, Matplotlib/Seaborn), SQL, notebooks Jupyter, Metabase, Google Sheets et Looker Studio. Je m'adapte aux outils que vous utilisez déjà." },
                { q: "Travaillez-vous à prix fixe ou à l'heure ?", a: "Les deux. Les projets courts et bien définis fonctionnent mieux à prix fixe. Le support analytique continu se fait généralement en forfait ou à la journée. Nous trouverons ce qui convient à votre projet." },
                { q: "Combien de temps dure un projet typique ?", a: "Une analyse ciblée ou la construction d'un dashboard prend 1 à 3 semaines. Les migrations plus importantes dépendent du projet. Je vous donnerai un calendrier clair lors de notre appel découverte." },
                { q: "Signez-vous des NDA ?", a: "Oui, toujours. Les données clients et le contexte business sont traités avec une totale confidentialité. La plupart de mon portfolio est anonymisé pour cette raison." }
            ]
        },
        footer: {
            cta: "Travaillons ensemble",
            sub: "Que vous ayez un projet défini ou juste une question sur vos données, je suis disponible pour en discuter.",
            book: "Réserver un appel découverte",
            copy: "© 2026 uai data. Tous droits réservés."
        }
    }
};
