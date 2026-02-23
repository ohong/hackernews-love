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
          padding: "64px 80px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: 42,
                color: "#f0eee6",
                fontStyle: "italic",
              }}
            >
              {"\u201CMEH.\u201D"}
            </div>
            <div style={{ fontSize: 20, color: "#7a7772" }}>
              {"on Figma \u2014 now worth $60B"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: 42,
                color: "#f0eee6",
                fontStyle: "italic",
              }}
            >
              {"\u201CStop ruining JS!\u201D"}
            </div>
            <div style={{ fontSize: 20, color: "#7a7772" }}>
              {"on React \u2014 20M+ developers"}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: 42,
                color: "#f0eee6",
                fontStyle: "italic",
              }}
            >
              {"\u201CMind-numbingly dull.\u201D"}
            </div>
            <div style={{ fontSize: 20, color: "#7a7772" }}>
              {"on ChatGPT \u2014 100M users in 2 months"}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 1,
              background: "#3a3836",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: 40,
                color: "#f0eee6",
                fontWeight: 600,
              }}
            >
              hackernews.love
            </div>
            <div
              style={{
                fontSize: 20,
                color: "#9b9790",
                fontStyle: "italic",
              }}
            >
              {"Every great company was once someone\u2019s bad idea."}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
