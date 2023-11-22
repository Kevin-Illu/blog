import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

interface OgOptions {
  title?: string;
  description?: string;
}

const defaultOptions: OgOptions = {
  title: "Kevin Illu",
  description: "Software Developer",
};

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.has("title") || defaultOptions.title;
    const description =
      searchParams.has("description") || defaultOptions.description;

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "black",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontStyle: "normal",
                letterSpacing: "-0.025em",
                color: "white",
                marginTop: 30,
                padding: "0 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 60,
                fontStyle: "normal",
                letterSpacing: "-0.025em",
                color: "white",
                marginTop: 30,
                padding: "0 120px",
                lineHeight: 1.4,
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
