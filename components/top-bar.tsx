import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Icon } from "./icons";
import { suggestUrl } from "@/lib/links";

export function TopBar() {
  return (
    <header className="site-header wrap">
      <Link href="/" className="wordmark" aria-label="Hacker News Love home">
        <span className="brand-mark" aria-hidden="true">
          Y<span>♥</span>
        </span>
        <span>
          hackernews<span className="brand-love">.love</span>
        </span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#collection" className="header-link">
          The collection
        </Link>
        <Link href="/#about" className="header-link about-link">
          A note on hindsight
        </Link>
        <a
          href={suggestUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="suggest-link"
        >
          Suggest a story <Icon name="diagonal" width="14" height="14" />
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
