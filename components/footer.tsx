import Link from "next/link";
import { discussionUrl, repositoryUrl, suggestUrl } from "@/lib/links";
import { Icon } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer wrap">
      <Link href="/" className="footer-signoff">
        Made for the curious.
        <Icon name="heart" width="17" height="17" />
      </Link>
      <p>An independent collection. Not affiliated with Y Combinator.</p>
      <div>
        <a href={suggestUrl} target="_blank" rel="noopener noreferrer">
          Suggest a story
        </a>
        <a href={discussionUrl} target="_blank" rel="noopener noreferrer">
          Join the discussion <span aria-hidden="true">↗</span>
        </a>
        <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
          Source <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
