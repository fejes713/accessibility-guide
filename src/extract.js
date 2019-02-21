// This script converts markdown files into JSON format
const fs = require("fs-extra")
const path = require("path")
const chalk = require("chalk")
const {
    attempt,
    readData,
    getSection,
    getFirstSection,
    getShortTip,
    getLongTip
} = require("./util")

console.time("Extractor")

attempt("data.json generation", () => {
    const output = Object.entries(readData()).map(([name, contents]) => {
        const shortTip = getShortTip(contents)
        const longTip = getLongTip(contents)

        const links = getSection("### Resources", contents)
            .split("\n")
            .filter(v =>
                /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/.test(
                    v
                )
            )
            .map(v => v.replace(/[*-] /g, ""))
            .filter(v => v.trim() !== "" && !v.includes("tags"))

        return {
            name,
            shortTip,
            longTip,
            links,
            category: parseInt(
                (contents.match(/<!--\s*category:\s*\((.+)\)/) || [])[1],
                10
            )
        }
    })

    fs.writeFileSync("./data.json", JSON.stringify(output, null, 2))
})

console.log(`${chalk.green("SUCCESS!")} data.json file generated!`)
console.timeEnd("Extractor")