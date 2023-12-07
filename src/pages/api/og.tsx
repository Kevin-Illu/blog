import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { OgImageContent } from "@/types";

export const config = {
  runtime: "edge",
};

const defaultOptions: OgImageContent = {
  title: "Kevin Illu",
  description: "Software Developer",
};

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || defaultOptions.title;

    return new ImageResponse(
      (
        <div tw="flex flex-col justify-center items-center gap-8 bg-white w-full h-full p-[4rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div tw="flex justify-center items-center w-full">
            <svg
              width="141"
              height="145"
              viewBox="0 0 91 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.34 12L20.67 50M14 88L20.67 50M20.67 50L83 12M20.67 50L83 81.7862"
                stroke="black"
                stroke-width="28"
              />
            </svg>
          </div>
          <div tw="flex w-full justify-center items-center">
            <h1>{title}</h1>
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
