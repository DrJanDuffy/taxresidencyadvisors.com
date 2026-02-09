import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F1A2E",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "#F1F5F9",
              marginBottom: 16,
              fontFamily: "serif",
            }}
          >
            KLB Consultants
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#C9A84C",
              marginBottom: 24,
            }}
          >
            Tax Residency Advisors
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#64748B",
              maxWidth: 600,
            }}
          >
            The Las Vegas real estate expert CPAs trust for Nevada tax-residency relocations.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
