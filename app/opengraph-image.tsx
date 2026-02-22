import { ImageResponse } from "next/og";

export const alt =
  "hackernews.love \u2014 Every great company was once someone\u2019s bad idea";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1f1e1d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 600,
            color: "#f0eee6",
            marginBottom: 24,
          }}
        >
          hackernews.love
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#9b9790",
            fontStyle: "italic",
          }}
        >
          {"Every great company was once someone\u2019s bad idea."}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 20, color: "#7a7772" }}>
            A love letter to builders
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
