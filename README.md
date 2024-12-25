# DnDumb

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains all the project related to DnDumb.

## FAQ

### I want to create a \<thing\>, how do I do it?

Let's say you want to create an `item` in the `homebrew` project.

You would need to go to `src/content/docs/homebrew/items` and add a new markdown file following the examples in the other ones.

### But my \<thing\> does not exist!!!!1!

Create the folder under `homebrew` then open the file `astro.config.mjs` in the root directory, there you need to add the corresponding entry in the `sidebar`.