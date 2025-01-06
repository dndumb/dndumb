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
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        it: {
          label: "Italiano",
          lang: "it",
        },
      },
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
              translations: {
                it: "Talenti",
              },
            },
            {
              label: "Spells",
              autogenerate: {
                directory: "homebrew/spells",
              },
              translations: {
                it: "Incantesimi",
              },
            },
            {
              label: "Subclass",
              autogenerate: {
                directory: "homebrew/subclass",
              },
              translations: {
                it: "Sottoclassi",
              },
            },
            {
              label: "Weapons",
              autogenerate: {
                directory: "homebrew/weapons",
              },
              translations: {
                it: "Armi",
              },
            },
            {
              label: "Items",
              autogenerate: {
                directory: "homebrew/items",
              },
              translations: {
                it: "Oggetti",
              },
            },
            {
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew/magic-items",
              },
              translations: {
                it: "Oggetti Magici",
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
              translations: {
                it: "Talenti",
              },
            },
            {
              label: "Spells",
              autogenerate: {
                directory: "homebrew-nsfw/spells",
              },
              translations: {
                it: "Incantesimi",
              },
            },
            /*{
              label: "Weapons",
              autogenerate: {
                directory: "homebrew-nsfw/weapons",
              },
              translations: {
                it: "Armi",
              },
            },*/
            /*{
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew-nsfw/magic-items",
              },
              translations: {
                it: "Oggetti Magici",
              },
            },*/
          ],
        },
      ],
    }),
  ],
});
