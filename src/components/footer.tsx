"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <footer className="relative mt-24 bg-background/60 backdrop-blur-xl overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none max-w-4xl mx-auto border-t border-border/40">
        <FlickeringGrid
          className="h-full w-full opacity-20"
          squareSize={3}
          gridGap={6}
          maxOpacity={0.4}
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black, transparent 85%)",
          }}
        />

        {/* Glow sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="container relative z-10 px-6 py-20 max-w-4xl mx-auto border-t border-border/40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-16 items-end">
          {/* LEFT */}
          <div className="space-y-10">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-muted-foreground/30" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
                Contato
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Vamos criar
                <br />
                <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 bg-clip-text text-transparent">
                  algo juntos?
                </span>
              </h2>

              <p className="max-w-[420px] text-muted-foreground text-sm leading-relaxed">
                Tem um projeto, ideia ou só quer trocar uma visão?
                <span className="text-foreground/70"> Sempre respondo.</span>
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="group flex items-center gap-2 px-6 py-3 bg-primary-foreground border rounded-full text-sm font-medium transition-all hover:gap-3 hover:pr-5 active:scale-95 shadow-md hover:shadow-lg">
                <Mail size={16} />
                Mandar e-mail
                <ArrowUpRight
                  size={14}
                  className="opacity-60 group-hover:opacity-100 transition"
                />
              </Link>

              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 bg-primary-foreground border rounded-full text-sm font-medium transition-all hover:gap-3 hover:pr-5 active:scale-95 shadow-md hover:shadow-lg">
                <Linkedin size={16} />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start md:items-end gap-10">
            {/* Status */}
            <div className="space-y-2 md:text-right">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40">
                Disponibilidade
              </p>

              <div className="flex items-center md:justify-end gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 blur-[2px]" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>

                <p className="text-sm text-foreground/80">
                  Disponível projetos
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {[
                {
                  href: DATA.contact.social.GitHub.url,
                  icon: <Github size={16} />,
                  label: "GitHub",
                },
                {
                  href: DATA.contact.social.LinkedIn.url,
                  icon: <Linkedin size={16} />,
                  label: "LinkedIn",
                },
                {
                  href: `mailto:${DATA.contact.email}`,
                  icon: <Mail size={16} />,
                  label: "Email",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-border/50 text-muted-foreground hover:text-foreground transition-all hover:scale-105 hover:border-border hover:shadow-md">
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-6 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-muted-foreground/40 tracking-widest">
            © {currentYear} {DATA.name}
          </p>

          <p className="text-[12px] text-muted-foreground/30 tracking-widest">
            Frontend Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
