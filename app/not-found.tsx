import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="wrap not-found">
      <p className="eyebrow">A missing volume</p>
      <h1>
        This shelf has
        <br />a little gap.
      </h1>
      <p>We couldn’t find that story. There are plenty more to explore.</p>
      <Link href="/#collection" className="button-primary">
        Back to the collection →
      </Link>
    </main>
  );
}
