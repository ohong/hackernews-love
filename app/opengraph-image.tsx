import { ImageResponse } from "next/og";
export const alt =
  "Hacker News Love — Good ideas. Mixed reviews. A small library of big what-ifs.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  const books = [
    { name: "Dropbox", color: "#294f70" },
    { name: "GitHub", color: "#574469" },
    { name: "Bitcoin", color: "#a65c31" },
    { name: "Stripe", color: "#61517b" },
    { name: "Figma", color: "#80594d" },
    { name: "React", color: "#3f737b" },
  ];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f7f5ef",
        color: "#302e28",
        padding: "52px 66px",
      }}
    >
      <div style={{ fontSize: 22, display: "flex" }}>
        hackernews<span style={{ color: "#b74b28" }}>.love</span>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "serif",
            fontSize: 80,
            letterSpacing: "-4px",
            lineHeight: 1.1,
          }}
        >
          <span>Good ideas.</span>
          <span style={{ color: "#b74b28", fontStyle: "italic" }}>
            Mixed reviews.
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 6,
            paddingTop: 15,
          }}
        >
          {books.map((book, index) => (
            <div
              key={book.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: book.color,
                width: 42,
                height: 240 + (index % 3) * 16,
                color: "#f3ead3",
                borderRadius: "2px",
                boxShadow: "inset 3px 0 4px #00000035",
              }}
            >
              <span
                style={{
                  display: "flex",
                  transform: "rotate(90deg)",
                  whiteSpace: "nowrap",
                  fontSize: 20,
                  fontFamily: "serif",
                }}
              >
                {book.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #dfdcd2",
          paddingTop: 23,
          justifyContent: "space-between",
          fontSize: 17,
          color: "#777269",
        }}
      >
        <span>A small library of big what-ifs.</span>
        <span>The first impressions. And what happened next.</span>
      </div>
    </div>,
    size,
  );
}
