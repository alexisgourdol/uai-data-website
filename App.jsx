const { useState, useEffect, useRef } = React;

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
        }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function Reveal({ children, delay = 0, className = "", style = {} }) {
    const [ref, visible] = useReveal();
    return (
        <div ref={ref} className={className} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
            ...style
        }}>
            {children}
        </div>
    );
}

// ─── Lucide icons (inline SVG wrappers) ──────────────────────────────────────
const icons = {
    BarChart2: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
    ),
    TrendingDown: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" />
        </svg>
    ),
    Settings: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    ),
    Database: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
    ),
    Github: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    ),
    Linkedin: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
    ),
    Mail: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
    ),
    ChevronDown: ({ size = 18 }) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
            <polyline points="6 9 12 15 18 9" />
        </svg>
    ),
    Menu: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    ),
    X: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),
    ArrowUpRight: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
            <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
        </svg>
    ),
    Terminal: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
        </svg>
    ),
    Award: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
    ),
    BookOpen: () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    )
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ t, lang, setLang }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: t.nav.services, href: "#services" },
        { label: t.nav.portfolio, href: "#portfolio" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.blog, href: "#blog" },
        { label: t.nav.contact, href: "#contact" }
    ];

    const scrollTo = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            background: scrolled ? "rgba(250,249,246,0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            transition: "all 0.3s ease",
            padding: "0 clamp(1.5rem, 5vw, 3rem)"
        }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
                {/* Logo */}
                <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", textDecoration: "none", letterSpacing: "-0.02em" }}>
                    {t.nav.logo}
                    <span style={{ color: "var(--accent)", marginLeft: 2 }}>.</span>
                </a>

                {/* Desktop links */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-links">
                    {links.map(l => (
                        <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }}
                            style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => e.target.style.color = "var(--text)"}
                            onMouseLeave={e => e.target.style.color = "var(--text-muted)"}>
                            {l.label}
                        </a>
                    ))}
                </div>

                {/* Right: lang + CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="nav-right">
                    <div style={{ display: "flex", gap: "0.25rem", fontSize: "0.8rem", fontWeight: 600 }}>
                        {["en", "fr"].map(l => (
                            <button key={l} onClick={() => setLang(l)}
                                style={{
                                    background: "none", border: "none", cursor: "pointer", padding: "4px 6px", borderRadius: 4,
                                    color: lang === l ? "var(--accent)" : "var(--text-muted)",
                                    fontWeight: lang === l ? 700 : 500,
                                    textTransform: "uppercase", letterSpacing: "0.05em",
                                    fontFamily: "var(--font-mono)", fontSize: "0.75rem"
                                }}>
                                {l}
                            </button>
                        ))}
                    </div>
                    <a href="https://calendar.app.google/1PBpmZw9S5cVDVb26" target="_blank" rel="noopener noreferrer"
                        style={{
                            background: "var(--accent)", color: "#fff", padding: "8px 18px",
                            borderRadius: 8, fontSize: "0.875rem", fontWeight: 600, textDecoration: "none",
                            transition: "opacity 0.2s"
                        }}
                        onMouseEnter={e => e.target.style.opacity = "0.85"}
                        onMouseLeave={e => e.target.style.opacity = "1"}
                        className="nav-cta">
                        {t.nav.cta}
                    </a>
                    {/* Mobile menu btn */}
                    <button onClick={() => setMenuOpen(!menuOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", display: "none", padding: 4 }}
                        className="nav-burger">
                        {menuOpen ? <icons.X /> : <icons.Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div style={{
                    background: "var(--bg)", borderTop: "1px solid var(--border)",
                    padding: "1.5rem clamp(1.5rem, 5vw, 3rem) 2rem"
                }}>
                    {links.map(l => (
                        <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href); }}
                            style={{ display: "block", padding: "0.75rem 0", fontSize: "1.1rem", fontWeight: 500, color: "var(--text)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
                            {l.label}
                        </a>
                    ))}
                    <a href="https://calendar.app.google/1PBpmZw9S5cVDVb26" target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-block", marginTop: "1.5rem", background: "var(--accent)", color: "#fff", padding: "12px 24px", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>
                        {t.nav.cta}
                    </a>
                </div>
            )}
        </nav>
    );
}

// ─── DATA NETWORK CANVAS ──────────────────────────────────────────────────────
function DataNetworkCanvas({ accent }) {
    const canvasRef = useRef(null);
    const animRef = useRef(null);
    const imgRef = useRef(null);
    const nodesRef = useRef([]);

    useEffect(() => {
        const img = new Image();
        img.src = "assets/images/alexis-pic.png";
        imgRef.current = img;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const dpr = window.devicePixelRatio || 1;
        const LOGICAL = 480;
        canvas.width = LOGICAL * dpr;
        canvas.height = LOGICAL * dpr;
        canvas.style.width = "100%";
        canvas.style.maxWidth = LOGICAL + "px";
        canvas.style.height = "auto";
        ctx.scale(dpr, dpr);
        const W = LOGICAL;
        const H = LOGICAL;
        const cx = W / 2;
        const cy = H / 2;
        const portraitR = 88;
        const exclusionR = portraitR + 24;

        // Parse accent color to rgb
        function hexToRgb(hex) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            return { r, g, b };
        }
        const rgb = hexToRgb(accent || "#D97706");

        // Generate nodes — avoid portrait center
        const NODE_COUNT = 34;
        const nodes = [];
        let attempts = 0;
        while (nodes.length < NODE_COUNT && attempts < 2000) {
            attempts++;
            const x = 28 + Math.random() * (W - 56);
            const y = 28 + Math.random() * (H - 56);
            const dx = x - cx, dy = y - cy;
            if (Math.sqrt(dx * dx + dy * dy) < exclusionR) continue;
            const bright = Math.random() > 0.72;
            const size = bright ? 3 + Math.random() * 2.5 : 1.5 + Math.random() * 2;
            nodes.push({
                x, y,
                vx: (Math.random() - 0.5) * 0.28,
                vy: (Math.random() - 0.5) * 0.28,
                size,
                bright,
                phase: Math.random() * Math.PI * 2,
                speed: 0.012 + Math.random() * 0.018,
                pulseAmp: 0.4 + Math.random() * 0.6
            });
        }
        nodesRef.current = nodes;

        let t = 0;
        function draw() {
            t += 1;
            ctx.clearRect(0, 0, W, H);

            // Faint radial glow behind portrait
            const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, portraitR * 2.2);
            glow.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.10)`);
            glow.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, W, H);

            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        const alpha = (1 - dist / 110) * 0.18;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Lines from nodes to portrait center (brightest nodes only)
            nodes.forEach(n => {
                if (!n.bright) return;
                const dx = cx - n.x, dy = cy - n.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const alpha = Math.max(0, (1 - dist / 260) * 0.12);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
                ctx.lineWidth = 0.8;
                ctx.setLineDash([3, 6]);
                ctx.moveTo(n.x, n.y);
                // Stop at portrait edge
                const ux = dx / dist, uy = dy / dist;
                ctx.lineTo(n.x + ux * (dist - exclusionR), n.y + uy * (dist - exclusionR));
                ctx.stroke();
                ctx.setLineDash([]);
            });

            // Draw nodes
            nodes.forEach(n => {
                const pulse = 1 + Math.sin(n.phase + t * n.speed) * n.pulseAmp * 0.18;
                const r = n.size * pulse;
                if (n.bright) {
                    // Glow ring
                    const g2 = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3.5);
                    g2.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},0.22)`);
                    g2.addColorStop(1, "rgba(0,0,0,0)");
                    ctx.fillStyle = g2;
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
                    ctx.fill();
                    // Core dot
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.9)`;
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.28)`;
                    ctx.fill();
                }

                // Move node
                n.x += n.vx;
                n.y += n.vy;
                // Bounce off walls
                if (n.x < 20 || n.x > W - 20) n.vx *= -1;
                if (n.y < 20 || n.y > H - 20) n.vy *= -1;
                // Repel from portrait
                const ndx = n.x - cx, ndy = n.y - cy;
                const nd = Math.sqrt(ndx * ndx + ndy * ndy);
                if (nd < exclusionR + 8) {
                    n.x = cx + (ndx / nd) * (exclusionR + 8);
                    n.y = cy + (ndy / nd) * (exclusionR + 8);
                    n.vx += (ndx / nd) * 0.3;
                    n.vy += (ndy / nd) * 0.3;
                }
                // Speed cap
                const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
                if (spd > 0.5) { n.vx = (n.vx / spd) * 0.5; n.vy = (n.vy / spd) * 0.5; }
            });

            // Portrait circle clip
            ctx.save();
            ctx.beginPath();
            ctx.arc(cx, cy, portraitR, 0, Math.PI * 2);
            ctx.clip();
            if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
                const iw = imgRef.current.naturalWidth;
                const ih = imgRef.current.naturalHeight;
                const scale = (portraitR * 2) / Math.min(iw, ih);
                const dw = iw * scale, dh = ih * scale;
                ctx.drawImage(imgRef.current, cx - dw / 2, cy - dh / 2 - portraitR * 0.08, dw, dh);
            } else {
                ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.15)`;
                ctx.fillRect(0, 0, W, H);
            }
            ctx.restore();

            // Portrait ring
            ctx.beginPath();
            ctx.arc(cx, cy, portraitR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.55)`;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            // Outer dashed orbit ring
            ctx.beginPath();
            ctx.arc(cx, cy, portraitR + 18, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.10)`;
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 8]);
            ctx.stroke();
            ctx.setLineDash([]);

            // Name label under portrait
            ctx.font = '600 13px "DM Sans", sans-serif';
            ctx.textAlign = "center";
            ctx.textBaseline = "top";
            ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},0.9)`;
            ctx.fillText("Alexis", cx, cy + portraitR + 24);

            animRef.current = requestAnimationFrame(draw);
        }

        img.onload = () => { };
        animRef.current = requestAnimationFrame(draw);
        return () => cancelAnimationFrame(animRef.current);
    }, [accent]);

    return (
        <canvas
            ref={canvasRef}
            style={{ display: "block" }}
        />
    );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ t, accent }) {
    const scrollTo = (href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100, paddingBottom: 80, position: "relative", overflow: "hidden" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 3rem)", position: "relative", width: "100%" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="hero-grid">

                    {/* LEFT: text */}
                    <div>
                        {/* Eyebrow */}
                        <Reveal>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "1.5rem",
                                background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100,
                                padding: "5px 14px 5px 5px", fontSize: "0.8rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)"
                            }}>
                                {/* Mini portrait */}
                                <img
                                    src="assets/images/alexis-pic.png"
                                    alt="Alexis"
                                    style={{
                                        width: 28, height: 28, borderRadius: "50%",
                                        objectFit: "cover", objectPosition: "center top",
                                        flexShrink: 0,
                                        border: "1.5px solid var(--accent)"
                                    }}
                                />
                                <span className="hero-eyebrow-full">{t.hero.eyebrow}</span>
                                <span className="hero-eyebrow-short" style={{ display: "none" }}>{t.hero.eyebrowShort}</span>
                            </div>
                        </Reveal>

                        {/* Headline */}
                        <Reveal delay={80}>
                            <h1 style={{
                                fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1,
                                letterSpacing: "-0.03em", color: "var(--text)",
                                marginBottom: "1.5rem"
                            }}>
                                {t.hero.headline}
                            </h1>
                        </Reveal>

                        {/* Sub */}
                        <Reveal delay={160}>
                            <p style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                                {t.hero.sub}
                            </p>
                        </Reveal>

                        {/* CTAs */}
                        <Reveal delay={240}>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <a href="https://calendar.app.google/1PBpmZw9S5cVDVb26" target="_blank" rel="noopener noreferrer"
                                    style={{
                                        background: "var(--accent)", color: "#fff", padding: "14px 28px",
                                        borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                                        display: "inline-flex", alignItems: "center", gap: 8,
                                        boxShadow: "0 4px 20px rgba(217,119,6,0.3)",
                                        transition: "transform 0.2s, box-shadow 0.2s"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(217,119,6,0.4)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(217,119,6,0.3)"; }}>
                                    {t.hero.cta1} <icons.ArrowUpRight />
                                </a>
                                <a href="#portfolio" onClick={e => { e.preventDefault(); scrollTo("#portfolio"); }}
                                    style={{
                                        background: "var(--surface)", color: "var(--text)", padding: "14px 28px",
                                        borderRadius: 10, fontWeight: 600, fontSize: "1rem", textDecoration: "none",
                                        border: "1.5px solid var(--border)", transition: "border-color 0.2s, color 0.2s, background 0.2s"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--bg)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--surface)"; }}>
                                    {t.hero.cta2}
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* RIGHT: animated network */}
                    <Reveal delay={120} className="hero-visual">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <DataNetworkCanvas accent={accent} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// ─── STATS BAR ─────────────────────────────────────────────────────────────
function Stats({ t }) {
    return (
        <section style={{ background: "var(--text)", padding: "3rem clamp(1.5rem, 5vw, 3rem)" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="stats-grid">
                {t.stats.items.map((s, i) => (
                    <Reveal key={i} delay={i * 80}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.value}</div>
                            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", marginTop: "0.5rem", fontFamily: "var(--font-mono)" }}>{s.label}</div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
const serviceIcons = [icons.BarChart2, icons.TrendingDown, icons.Settings, icons.Database];

function Services({ t }) {
    return (
        <section id="services" style={{ padding: "7rem clamp(1.5rem, 5vw, 3rem)" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Services</div>
                        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "0.75rem" }}>{t.services.title}</h2>
                        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: 520 }}>{t.services.subtitle}</p>
                    </div>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="services-grid">
                    {t.services.items.map((s, i) => {
                        const Icon = serviceIcons[i];
                        return (
                            <Reveal key={i} delay={i * 80}>
                                <div style={{
                                    background: "var(--surface)", border: "1px solid var(--border)",
                                    borderRadius: 14, padding: "2rem 2rem 2.25rem",
                                    transition: "box-shadow 0.25s, transform 0.25s", cursor: "default"
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                    <div style={{
                                        width: 44, height: 44, borderRadius: 10, background: "oklch(0.72 0.12 178 / 0.1)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "var(--accent)", marginBottom: "1.25rem"
                                    }}>
                                        <Icon />
                                    </div>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
                                    <p style={{ fontSize: "0.925rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{s.desc}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ─── PORTFOLIO ────────────────────────────────────────────────────────────────
const accentColors = ["#0D9488", "#6366F1", "#F59E0B", "#EC4899"];

function Portfolio({ t }) {
    return (
        <section id="portfolio" style={{ padding: "7rem clamp(1.5rem, 5vw, 3rem)", background: "var(--surface-2)" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Work</div>
                        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "0.75rem" }}>{t.portfolio.title}</h2>
                        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: 520 }}>{t.portfolio.subtitle}</p>
                    </div>
                </Reveal>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="portfolio-grid">
                    {t.portfolio.items.map((p, i) => (
                        <Reveal key={i} delay={i * 80}>
                            <div style={{
                                background: "var(--bg)", borderRadius: 14, overflow: "hidden",
                                border: "1px solid var(--border)",
                                transition: "box-shadow 0.25s, transform 0.25s"
                            }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                {/* Top accent bar */}
                                <div style={{ height: 4, background: accentColors[i] }}></div>
                                <div style={{ padding: "1.75rem 2rem 2rem" }}>
                                    {!p.github && (
                                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "0.75rem", opacity: 0.6 }}>
                                            {t.portfolio.nda}
                                        </div>
                                    )}
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{p.title}</h3>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.desc}</p>
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", alignItems: "center", justifyContent: "space-between" }}>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                                            {p.tags.map(tag => (
                                                <span key={tag} style={{
                                                    fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500,
                                                    background: "var(--surface)", border: "1px solid var(--border)",
                                                    borderRadius: 6, padding: "3px 9px", color: "var(--text-muted)"
                                                }}>{tag}</span>
                                            ))}
                                        </div>
                                        {p.github && (
                                            <a href="https://github.com/alexisgourdol/waze-churn-analysis" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                                                {t.portfolio.viewGithub}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects({ t }) {
    return (
        <section style={{ padding: "7rem clamp(1.5rem, 5vw, 3rem)" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Side projects</div>
                        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "0.75rem" }}>{t.projects.title}</h2>
                        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: 520 }}>{t.projects.subtitle}</p>
                    </div>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }} className="projects-grid">
                    {t.projects.items.map((p, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div style={{
                                background: "var(--text)", borderRadius: 14, padding: "2rem",
                                transition: "transform 0.25s, box-shadow 0.25s"
                            }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ color: "var(--accent)" }}><icons.Terminal /></div>
                                        <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>{p.name}</span>
                                    </div>
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
                                        onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                                        onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}>
                                        <icons.Github />
                                    </a>
                                </div>
                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{p.desc}</p>
                                <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: "1.25rem", alignItems: "center" }}>
                                    <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                                        {t.projects.github}
                                    </a>
                                    {p.demo && (
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <a href={p.demo} target="_blank" rel="noopener noreferrer"
                                                style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontWeight: 600, transition: "color 0.2s" }}
                                                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                                                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                                                {t.projects.demo}
                                            </a>
                                            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 5, padding: "2px 7px", letterSpacing: "0.03em" }}>
                                                pw: scopedemo
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About({ t }) {
    return (
        <section id="about" style={{ padding: "7rem clamp(1.5rem, 5vw, 3rem)", background: "var(--surface-2)" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="about-grid">
                {/* Photo / avatar placeholder */}
                <Reveal>
                    <div style={{ position: "relative" }}>
                        <div style={{
                            width: "100%", aspectRatio: "4/5", borderRadius: 20,
                            background: "var(--surface)", border: "1px solid var(--border)",
                            overflow: "hidden", position: "relative"
                        }}>
                            <img
                                src="assets/images/alexis-pic.png"
                                alt="Alexis"
                                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                            />
                        </div>
                        {/* Accent card */}
                        <div style={{
                            position: "absolute", bottom: -20, right: -20, background: "var(--accent)",
                            borderRadius: 14, padding: "1rem 1.5rem", color: "#fff",
                            boxShadow: "0 8px 24px oklch(0.72 0.12 178 / 0.35)"
                        }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", opacity: 0.8, marginBottom: 2 }}>uai</div>
                            <div style={{ fontSize: "1rem", fontWeight: 700 }}>/ ˈwai /</div>
                            <div style={{ fontSize: "0.78rem", opacity: 0.8, marginTop: 2 }}>Minas Gerais, BR</div>
                        </div>
                    </div>
                </Reveal>

                {/* Text */}
                <div>
                    <Reveal>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>About</div>
                        <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "2rem" }}>{t.about.title}</h2>
                    </Reveal>
                    {t.about.body.map((para, i) => (
                        <Reveal key={i} delay={i * 80}>
                            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.25rem" }}>{para}</p>
                        </Reveal>
                    ))}
                    {/* Credentials */}
                    <Reveal delay={280}>
                        <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12 }}>
                            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.about.credentials}</div>
                            {[
                                { icon: icons.BookOpen, label: t.about.leWagon },
                                { icon: icons.Award, label: t.about.google }
                            ].map((c, i) => (
                                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: i === 0 ? "0.75rem" : 0 }}>
                                    <span style={{ color: "var(--accent)" }}><c.icon /></span>
                                    <span style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: 500 }}>{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

// ─── BLOG ─────────────────────────────────────────────────────────────────────
function Blog({ t }) {
    return (
        <section id="blog" style={{ padding: "7rem clamp(1.5rem, 5vw, 3rem)" }}>
            <div style={{ maxWidth: 1120, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ marginBottom: "3.5rem" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Blog</div>
                        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "0.75rem" }}>{t.blog.title}</h2>
                        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: 520 }}>{t.blog.subtitle}</p>
                    </div>
                </Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }} className="blog-grid">
                    {t.blog.items.map((b, i) => (
                        <Reveal key={i} delay={i * 80}>
                            <a href="#" style={{ textDecoration: "none", display: "block" }}>
                                <div style={{
                                    background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14,
                                    padding: "2rem", height: "100%",
                                    transition: "box-shadow 0.25s, transform 0.25s"
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginBottom: "1rem" }}>{b.date}</div>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.4, marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>{b.title}</h3>
                                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.5rem" }}>{b.excerpt}</p>
                                    <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--accent)" }}>{t.blog.read}</div>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ({ t }) {
    const [open, setOpen] = useState(null);
    return (
        <section style={{ padding: "7rem clamp(1.5rem, 5vw, 3rem)", background: "var(--surface-2)" }}>
            <div style={{ maxWidth: 760, margin: "0 auto" }}>
                <Reveal>
                    <div style={{ marginBottom: "3.5rem", textAlign: "center" }}>
                        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>FAQ</div>
                        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)" }}>{t.faq.title}</h2>
                    </div>
                </Reveal>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {t.faq.items.map((item, i) => (
                        <Reveal key={i} delay={i * 60}>
                            <div style={{
                                background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden"
                            }}>
                                <button onClick={() => setOpen(open === i ? null : i)}
                                    style={{
                                        width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                                        padding: "1.25rem 1.5rem", background: "none", border: "none", cursor: "pointer",
                                        textAlign: "left", gap: "1rem"
                                    }}>
                                    <span style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text)", lineHeight: 1.4 }}>{item.q}</span>
                                    <span style={{ flexShrink: 0, color: "var(--accent)", transition: "transform 0.25s", transform: open === i ? "rotate(180deg)" : "rotate(0)" }}>
                                        <icons.ChevronDown />
                                    </span>
                                </button>
                                <div style={{
                                    maxHeight: open === i ? 300 : 0, overflow: "hidden",
                                    transition: "max-height 0.35s ease"
                                }}>
                                    <div style={{ padding: "0 1.5rem 1.5rem", fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── FOOTER / CTA ─────────────────────────────────────────────────────────────
function Footer({ t, lang, setLang }) {
    return (
        <footer id="contact">
            {/* CTA Block */}
            <section style={{
                padding: "8rem clamp(1.5rem, 5vw, 3rem)",
                background: "var(--text)", textAlign: "center", position: "relative", overflow: "hidden"
            }}>
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "28px 28px"
                }}></div>
                <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
                    <Reveal>
                        <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: "1.25rem", lineHeight: 1.1 }}>
                            {t.footer.cta}
                        </h2>
                    </Reveal>
                    <Reveal delay={80}>
                        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2.5rem" }}>{t.footer.sub}</p>
                    </Reveal>
                    <Reveal delay={160}>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="https://calendar.app.google/1PBpmZw9S5cVDVb26" target="_blank" rel="noopener noreferrer"
                                style={{
                                    background: "var(--accent)", color: "#fff", padding: "14px 32px",
                                    borderRadius: 10, fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                                    boxShadow: "0 4px 20px oklch(0.72 0.12 178 / 0.4)",
                                    transition: "transform 0.2s, box-shadow 0.2s"
                                }}
                                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}>
                                {t.footer.book}
                            </a>
                            <a href="mailto:alexis@uaidata.io"
                                style={{
                                    background: "rgba(255,255,255,0.08)", color: "#fff", padding: "14px 32px",
                                    borderRadius: 10, fontWeight: 600, fontSize: "1rem", textDecoration: "none",
                                    border: "1.5px solid rgba(255,255,255,0.15)",
                                    transition: "background 0.2s"
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}>
                                alexis@uaidata.io
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Bottom bar */}
            <div style={{ background: "#111", padding: "1.5rem clamp(1.5rem, 5vw, 3rem)" }}>
                <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                        uai data<span style={{ color: "var(--accent)" }}>.</span>
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                        <div style={{ display: "flex", gap: "0.25rem" }}>
                            {["en", "fr"].map(l => (
                                <button key={l} onClick={() => setLang(l)}
                                    style={{
                                        background: "none", border: "none", cursor: "pointer", padding: "4px 6px",
                                        color: lang === l ? "var(--accent)" : "rgba(255,255,255,0.4)",
                                        fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 600,
                                        textTransform: "uppercase", letterSpacing: "0.05em"
                                    }}>{l}</button>
                            ))}
                        </div>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                            style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                            <icons.Linkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                            style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                            onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>
                            <icons.Github />
                        </a>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>{t.footer.copy}</span>
                </div>
            </div>
        </footer>
    );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
function App() {
    const [lang, setLang] = useState("en");
    const [tweaks, setTweaks] = useState({
        accent: "#D97706",
        bg: "#FFFFFF",
        fontSize: "regular"
    });
    const [tweakOpen, setTweakOpen] = useState(false);
    const t = TRANSLATIONS[lang];

    // Wire up tweaks panel protocol
    useEffect(() => {
        const handler = (e) => {
            if (e.data?.type === "__activate_edit_mode") setTweakOpen(true);
            if (e.data?.type === "__deactivate_edit_mode") setTweakOpen(false);
        };
        window.addEventListener("message", handler);
        window.parent.postMessage({ type: "__edit_mode_available" }, "*");
        return () => window.removeEventListener("message", handler);
    }, []);

    const updateTweak = (key, value) => {
        setTweaks(prev => {
            const next = { ...prev, [key]: value };
            window.parent.postMessage({ type: "__edit_mode_set_keys", edits: next }, "*");
            return next;
        });
    };

    const accentPalette = [
        { label: "Teal", value: "#0D9488" },
        { label: "Amber", value: "#D97706" },
        { label: "Coral", value: "#E05C5C" },
        { label: "Indigo", value: "#6366F1" }
    ];

    return (
        <div style={{ "--accent": tweaks.accent, "--bg": tweaks.bg }}>
            <Nav t={t} lang={lang} setLang={setLang} />
            <Hero t={t} accent={tweaks.accent} />
            <Stats t={t} />
            <Services t={t} />
            <Portfolio t={t} />
            <Projects t={t} />
            <About t={t} />
            <Blog t={t} />
            <FAQ t={t} />
            <Footer t={t} lang={lang} setLang={setLang} />

            {/* Tweaks Panel */}
            {tweakOpen && (
                <div style={{
                    position: "fixed", bottom: 24, right: 24, zIndex: 9999,
                    background: "#fff", border: "1px solid #e5e4e0", borderRadius: 14,
                    padding: "1.25rem", width: 240, boxShadow: "0 8px 40px rgba(0,0,0,0.14)"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1c1c1c" }}>Tweaks</span>
                        <button onClick={() => { setTweakOpen(false); window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); }}
                            style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontSize: "1.1rem", lineHeight: 1 }}>×</button>
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Accent color</div>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {accentPalette.map(a => (
                                <button key={a.value} onClick={() => updateTweak("accent", a.value)} title={a.label}
                                    style={{
                                        width: 28, height: 28, borderRadius: 8, background: a.value, border: "none", cursor: "pointer",
                                        outline: tweaks.accent === a.value ? `3px solid ${a.value}` : "none",
                                        outlineOffset: 2, transition: "transform 0.15s"
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.15)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#888", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Background</div>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            {[{ label: "Warm", value: "#FAF9F6" }, { label: "Cool", value: "#F6F8FA" }, { label: "Pure", value: "#FFFFFF" }].map(b => (
                                <button key={b.value} onClick={() => updateTweak("bg", b.value)} title={b.label}
                                    style={{
                                        flex: 1, padding: "5px 0", fontSize: "0.72rem", fontWeight: 600, borderRadius: 6,
                                        background: b.value, border: tweaks.bg === b.value ? "2px solid #0D9488" : "1.5px solid #e5e4e0",
                                        cursor: "pointer", color: "#555"
                                    }}>{b.label}</button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{ "accent": "#D97706", "bg": "#FFFFFF", "fontSize": "regular" }/*EDITMODE-END*/;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
