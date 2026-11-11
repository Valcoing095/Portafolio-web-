import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const links = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function scrollToSection(id: string) {
    const waitForMenu = open;
    setOpen(false);

    const goToSection = () => {
      const section = document.getElementById(id);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    };

    if (waitForMenu) {
      window.setTimeout(goToSection, 300);
    } else {
      goToSection();
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/85 shadow-[0_10px_30px_-24px_rgba(11,37,69,0.5)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-2">
        <a
          href="#inicio"
          className="flex min-w-0 items-center gap-2.5"
          aria-label={`${profile.name}, ir al inicio`}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("inicio");
          }}
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-sm font-extrabold text-white shadow-soft sm:h-10 sm:w-10">
            YV
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-accent-400 ring-2 ring-white" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-[0.9rem] font-bold tracking-tight text-brand sm:text-[0.98rem]">
              {profile.name}
            </span>
            <span className="hidden text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted sm:block">
              Backend & Full Stack
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(link.id);
              }}
              className={`relative py-2 text-sm font-semibold transition-colors ${
                active === link.id ? "text-brand" : "text-muted hover:text-brand"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                  active === link.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={profile.cv}
            download
            className="btn-primary px-3 py-2 text-[0.7rem] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Descargar CV</span>
            <span className="sm:hidden">CV</span>
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-white text-brand transition hover:bg-brand-50 sm:h-10 sm:w-10 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            key="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-page py-5">
              <nav className="grid gap-1" aria-label="Navegación móvil">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      active === link.id
                        ? "bg-accent-50 text-accent-700"
                        : "text-brand hover:bg-brand-50"
                    }`}
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 opacity-40" aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
