// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DnDumb",
      social: {
        github: "https://github.com/dndumb",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Homebrew",
          collapsed: true,
          items: [
            {
              label: "DnDumb Homebrew",
              link: "/homebrew",
            },
            {
              label: "Feats",
              autogenerate: {
                directory: "homebrew/feats",
              },
            },
            {
              label: "Spells",
              autogenerate: {
                directory: "homebrew/spells",
              },
            },
            {
              label: "Weapons",
              autogenerate: {
                directory: "homebrew/weapons",
              },
            },
            {
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew/magic-items",
              },
            },
          ],
        },
        {
          label: "Homebrew, but NSFW",
          collapsed: true,
          items: [
            {
              label: "DnDumb Homebrew NSFW",
              link: "/homebrew-nsfw",
            },
            {
              label: "Feats",
              autogenerate: {
                directory: "homebrew-nsfw/feats",
              },
            },
            {
              label: "Spells",
              autogenerate: {
                directory: "homebrew-nsfw/spells",
              },
            },
            /*{
              label: "Weapons",
              autogenerate: {
                directory: "homebrew-nsfw/weapons",
              },
            },*/
            /*{
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew-nsfw/magic-items",
              },
            },*/
          ],
        },
      ],
    }),
  ],
});
