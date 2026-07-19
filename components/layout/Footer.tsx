import { SOCIALS } from "@/constants/data";
import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">
            {SITE.name}
            <span className="text-mint">.</span>
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            {SITE.location} · open to internships and working student roles
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-5">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-muted transition-colors hover:text-mint"
              >
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm text-muted transition-colors hover:text-mint"
            >
              Email
            </a>
          </li>
        </ul>
      </div>

      <p className="mx-auto mt-8 w-full max-w-6xl font-mono text-xs text-muted">
        © {new Date().getFullYear()} {SITE.name}. Built with Next.js, Tailwind CSS and GSAP.
      </p>
    </footer>
  );
}
