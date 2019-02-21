const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const util = require("./util.js");
const markdown = require("markdown-builder");
const snippets = require("../data.json");

const { headers, misc, lists } = markdown;
const CATEGORY_NAMES = [
  'Tips',
  'Pro Tips',
  'Facts'
];

const STATIC_PARTS_PATH = "./static-parts";

let startPart = "";
let endPart = "";
let output = "";

const detailsTOC = (title, snippetsArray) =>
  `\n${misc.collapsible(
    title,
    lists.ul(snippetsArray, snippet =>
      misc.link(
        snippet.shortTip
          .replace("\n", "")
          .split("```")[0]
          .trim(),
        misc.anchor(
          snippet.shortTip
            .replace("\n", "")
            .split("```")[0]
            .trim()
        )
      )
    ).trim()
  ).trim()}\n\n`;

console.time("Builder");

try {
  startPart = fs.readFileSync(
    path.join(STATIC_PARTS_PATH, "README-start.md"),
    "utf8"
  );
  endPart = fs.readFileSync(
    path.join(STATIC_PARTS_PATH, "README-end.md"),
    "utf8"
  );
} catch (err) {
  console.log(`${chalk.red("ERROR!")} During static part loading: ${err}`);
  process.exit(1);
}

try {
  // add static part for start
  output += `${startPart}\n`;

  const snippetsInTag = {};

  CATEGORY_NAMES.forEach((tag, i) => snippetsInTag[i] = snippets.filter(v => v.category == i));

  // write Table of Contents
  CATEGORY_NAMES.forEach((tag,i) => {
    const taggedSnippets = snippetsInTag[i];
    output += headers.h3(util.capitalize(tag));
    output += detailsTOC("View contents", taggedSnippets);
  });

  // delimeter after TOC
  output += misc.hr();

  // write actual snippets
  CATEGORY_NAMES.forEach((tag,i) => {
    output += headers.h2(util.capitalize(tag));
    const taggedSnippets = snippetsInTag[i];
    taggedSnippets.forEach(snippet => {
      output += headers.h3(snippet.shortTip).trim();
      output += `\n\n${snippet.longTip}`;
      if (snippet.links && snippet.links.length) {
        output += headers.h4('Links');
        output += `\n${snippet.links.map(v => `* ${v}`).join('\n')}`;
      }
      output += `\n<br>${misc.link(
        "⬆ Back to top",
        misc.anchor("Table of Contents")
      )}\n\n`
    })
  });

  // add static part for end
  output += `\n${endPart}\n`;

  fs.writeFileSync("README.md", output);
} catch (err) {
  console.log(`${chalk.red("ERROR!")} During README generation: ${err}`);
  process.exit(1);
}


console.log(`${chalk.green("SUCCESS!")} README file generated!`);
console.timeEnd("Builder");