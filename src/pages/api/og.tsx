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

const host = "http://localhost:3000";

export default function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || defaultOptions.title;
    console.log(title);

    const description =
      searchParams.get("description") || defaultOptions.description;
    console.log(description);

    return new ImageResponse(
      (
        <div tw="flex bg-white w-full h-full p-[4rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            tw="absolute top-0 left-0 z-0"
            src={`${host}/images/blurry-gradient.svg`}
            width={1200}
            height={630}
            alt="blurry background"
          ></img>
          <div tw="w-1/2 flex flex-col justify-center items-start z-10 font-bold">
            <h1 tw="text-6xl p-0 m-0 font-bold uppercase">{title}</h1>
            <p tw="text-4xl">{description}</p>
          </div>
          <div tw="w-1/2 flex justify-center items-center z-10">
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
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
