# scratchblocks2

This package is based and should be a drop-in replacement of the [original scratchblocks one](https://github.com/scratchblocks/scratchblocks).

## Difference with the original package

This packages:

- is a complete rewrite of the code
  - no more 1000+ lines long files
  - better OO structure (using ES6 classes)
  - files are better organized and in a more understandable manner
  - better doc inside the code
  - provides type safety (thanks to TypeScript)
- makes the code much more easily upgradable
- is language agnostic
  - doesn't consider English being the default, at least in the code (only as the default locale)
- decouples the view (render) from the model
  - makes it possible to add new blocks, sources of blocks, renderers and project loaders easily
- new features
  - allows to import Scratch projects
- doesn't rely on the translations from the Scratch website
  - original package wasn't updated with newer translations anyway
  - translation changes don't need approval from the Scratch Team

## Organisation

This package is divided in multiple folders:

- `lib` the library in itself (and UMD module)
- `docs` a small website for testing / messing around purposes
- `lambda` the code when setting up a SAAS instance (Google Cloud Platform in this case)
- `test` the tests for the whole package

## Credits

Thank you to the original authors of the [scratchblocks](https://github.com/scratchblocks/scratchblocks) library.

## License

See the [License.md](./License.md) file.
