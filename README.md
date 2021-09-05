# scratchblocks2

This package is based on the [original scratchblocks one](https://github.com/scratchblocks/scratchblocks).

## Difference with the original package

This packages:

- is a complete rewrite of the code
  - no more 1000+ lines long files
  - better OO structure
  - better doc inside the code
  - provides much more type safety (thanks to TypeScript)
- makes the code much more easily upgradable
- is language agnostic (doesn't consider English being the default, at lest in the code)
- decouples the view (render) from the model
- doesn't rely on the translations for Scratch

## Organisation

This package is divided in multiple parts:

- `lib` the library in itself (and UMD module)
- `playground` a small website for testing / messing around purposes
- `lambda` the code when setting up a SAAS instance (Google Cloud Platform in this case)

## Credits

Thank you to the original authors of the [scratchblocks](https://github.com/scratchblocks/scratchblocks) library.

## License

See the `License.md` file.
