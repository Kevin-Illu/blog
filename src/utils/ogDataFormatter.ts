import { OgImageContent } from "@/types";

export function ogImageContentEncode({
  title,
  description,
}: OgImageContent = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  const apiEndpoint = "/api/og";

  // Función para codificar los parámetros de la URL
  const encodeParameter = (param: string, value?: string) => {
    return value ? `${param}=${encodeURIComponent(value)}` : "";
  };

  // Construir la URL de la imagen og
  const ogImageUrl =
    baseUrl +
    apiEndpoint +
    "?" +
    encodeParameter("title", title) +
    (title && description ? "&" : "") +
    encodeParameter("description", description);

  return ogImageUrl;
}
