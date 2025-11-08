// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "DnDumb",
      logo: {
        src: "./src/assets/logo-head.svg",
      },
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
              label: "Homebrew",
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
          translations: {
            it: "Homebrew, ma NSFW",
          },
          collapsed: true,
          items: [
            {
              label: "Homebrew NSFW",
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
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew-nsfw/magic-items",
              },
              translations: {
                it: "Oggetti Magici",
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
            {
              label: "Bestiary",
              autogenerate: {
                directory: "homebrew-nsfw/bestiary",
              },
              translations: {
                it: "Bestiario",
              },
            },
          ],
        },
        {
          label: "Homebrew - Current Campaign",
          translations: {
            it: "Homebrew - Campagna Attiva",
          },
          collapsed: true,
          items: [
            {
              label: "Current Campaign Homebrew",
              link: "/homebrew-cc",
            },
            {
              label: "Items",
              autogenerate: {
                directory: "homebrew-cc/items",
              },
              translations: {
                it: "Oggetti",
              },
            },
            {
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew-cc/magic-items",
              },
              translations: {
                it: "Oggetti Magici",
              },
            },
            {
              label: "Game mechanics",
              autogenerate: {
                directory: "homebrew-cc/mechanics",
              },
              translations: {
                it: "Meccaniche di gioco",
              },
            },
            {
              label: "Weapons",
              autogenerate: {
                directory: "homebrew-cc/weapons",
              },
              translations: {
                it: "Armi",
              },
            },
          ],
        },
        {
          label: "Homebrew - Basapora Campaign",
          translations: {
            it: "Homebrew - Campagna Basapora",
          },
          collapsed: true,
          items: [
            {
              label: "Information",
              link: "/homebrew-basapora",
              translations: {
                it: "Informazioni",
              },
            },
            {
              label: "Magic Items",
              autogenerate: {
                directory: "homebrew-basapora/magic-items",
              },
              translations: {
                it: "Oggetti Magici",
              },
            },
          ],
        },
      ],
    }),
  ],
});
