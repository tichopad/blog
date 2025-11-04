// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  adapter: cloudflare({ imageService: "compile" }),
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Playfair Display",
        cssVariable: "--font-playfair",
        weights: [600],
      },
      {
        provider: fontProviders.google(),
        name: "EB Garamond",
        cssVariable: "--font-garamond",
        weights: [400, 700],
      },
    ],
  },
});
