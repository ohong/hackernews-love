import type { CSSProperties } from "react";
import Image from "next/image";
import type { Post } from "@/lib/types";

// Cover ornaments are print-like geometry, not copies of company logos.
function Ornament({ variant }: { variant: number }) {
  return (
    <svg
      className="cover-ornament"
      viewBox="0 0 160 160"
      fill="none"
      stroke="currentColor"
      strokeWidth=".8"
      aria-hidden="true"
    >
      {variant === 0 && (
        <>
          {Array.from({ length: 9 }, (_, i) => (
            <ellipse
              key={i}
              cx="80"
              cy="80"
              rx={18 + i * 6}
              ry="60"
              transform={`rotate(${i * 20} 80 80)`}
            />
          ))}
          <circle cx="80" cy="80" r="4" fill="currentColor" />
        </>
      )}
      {variant === 1 && (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <rect
              key={i}
              x={24 + i * 4}
              y={24 + i * 4}
              width={112 - i * 8}
              height={112 - i * 8}
              transform={`rotate(${i * 5} 80 80)`}
            />
          ))}
          <path d="M24 136 136 24M24 24l112 112" />
        </>
      )}
      {variant === 2 && (
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <circle
              key={i}
              cx="80"
              cy="56"
              r="32"
              transform={`rotate(${i * 30} 80 80)`}
            />
          ))}
          <circle cx="80" cy="80" r="62" />
        </>
      )}
      {variant === 3 && (
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <path
              key={i}
              d={`M${20 + i * 5} 130V${65 - i * 3}a${60 - i * 5} ${60 - i * 5} 0 0 1 ${120 - i * 10} 0v${65 + i * 3}`}
            />
          ))}
        </>
      )}
      {variant === 4 && (
        <>
          {Array.from({ length: 9 }, (_, i) => (
            <ellipse
              key={i}
              cx="80"
              cy={38 + i * 10}
              rx={25 + Math.sin(i / 3) * 28}
              ry="17"
            />
          ))}
          <path d="M80 12v136" />
        </>
      )}
    </svg>
  );
}

export function Book({
  post,
  index,
  compact = false,
}: {
  post: Post;
  index: number;
  compact?: boolean;
}) {
  return (
    <div
      className={`book-object ${compact ? "book-compact" : ""}`}
      style={{ "--book-color": post.coverColor } as CSSProperties}
      aria-hidden="true"
    >
      <div className="book-pages" />
      <div className="book-cover">
        <div className="book-cover-top">
          <span>THE UNLIKELY IDEAS LIBRARY</span>
          <span>VOL. {String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="book-art">
          {post.id === "dropbox" ? (
            <Image
              src="/art/cloud-archive.webp"
              alt=""
              width={320}
              height={320}
              sizes="(max-width: 600px) 180px, 240px"
            />
          ) : (
            <Ornament variant={index % 5} />
          )}
        </div>
        <div className="book-titling">
          <span className="book-year">HN / {post.year}</span>
          <span className="book-title">{post.coverTitle}</span>
          <span className="book-company">{post.companyName}</span>
        </div>
        <div className="book-colophon">
          <span>HACKER NEWS LOVE</span>
          <span>✳</span>
        </div>
      </div>
    </div>
  );
}
