# Contribution guidelines

> Accessibility-Guide is a community effort, so feel free to contribute in any way you can. Every contribution helps!

## There are several ways in which you can help:

* Submit new [pull requests](https://github.com/fejes713/accessibility-guide/pulls) accessibility tips and tricks with our [template](https://github.com/fejes713/accessibility-guide/blob/master/data-template.md)
    * Try to keep tips **short** and **straight to the point**. They should be easily understandable. For additional resources feel free to add links.
    * Tips should be added to `./data` directory. Once there you can run `npm run extractor` & `npm run builder` to generate a `README.md`. Website is generated automatically on Netlify so you shouldn't build it locally.
    * If it's just a typo, we don't mind, submit a quick fix to it


* Currently, we support 3 categories of questions: _tip_, _pro-tip_, and _you-should-know_
  * We would like to expand the project to include more categories
  * If you have better idea for category names feel free to let us know

## Additional information regarding the project and its structure

* **Do not modify** the `README.md` file or content of `./docs` directory. **Netlify** will automatically build `index.html` file when your pull request is merged. All changes to cards should be inside of `./data`
