import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Elevated Tech Solutions";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top, rgba(50,200,255,0.22), transparent 32%), linear-gradient(180deg, #07111f 0%, #040814 45%, #02050f 100%)",
          color: "#eff6ff",
          padding: "64px",
          fontFamily: "sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(125, 211, 252, 0.22)",
            background: "rgba(7, 15, 31, 0.72)",
            boxShadow: "0 28px 80px rgba(2, 12, 27, 0.45)",
            padding: "56px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "rgba(186, 230, 253, 0.88)",
              fontSize: 26,
              letterSpacing: "0.4em",
              textTransform: "uppercase"
            }}
          >
            Elevated Tech Solutions
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div
              style={{
                maxWidth: "900px",
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.04em"
              }}
            >
              Affordable, modern websites with a premium presence.
            </div>
            <div
              style={{
                maxWidth: "780px",
                fontSize: 30,
                lineHeight: 1.45,
                color: "rgba(219, 234, 254, 0.82)"
              }}
            >
              Websites for small businesses, nonprofits, and restaurants.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
