"use strict";

const fs = require("fs");
const YAML = require("yaml");

const months = [
  "janv. févr. mars avr. mai juin juil. août sept. oct. nov. déc.".split(" "),
  "Jan. Feb. Mar. Apr. May June July Aug. Sept. Oct. Nov. Dec.".split(" "),
];

const inputRaw = fs.readFileSync("./data.yaml", "utf-8");
const inputJSON = YAML.parse(inputRaw);

/** Traverses an object and splits it along "!"
 * @param obj Either a string, an array, or an object
 */
function traverse(obj) {
  let retA, retB;
  if (typeof obj === "string") {
    if (obj.match("!")) {
      [retA, retB] = obj.split(/\s*!\s*/);
    } else {
      [retA, retB] = [obj, obj];
    }
    retA = retA
      .trim()
      .replace(
        /(\d\d)\/(\d\d\d\d)/g,
        (_, month, year) => months[0][Number(month) - 1] + "\\ " + year
      );
    retB = retB
      .trim()
      .replace(
        /(\d\d)\/(\d\d\d\d)/g,
        (_, month, year) => months[1][Number(month) - 1] + "\\ " + year
      );
  } else if (Array.isArray(obj)) {
    [retA, retB] = [[], []];
    for (const elt of obj) {
      const [a, b] = traverse(elt);
      retA.push(a);
      retB.push(b);
    }
  } else {
    [retA, retB] = [{}, {}];
    for (const [key, value] of Object.entries(obj)) {
      const [a, b] = traverse(value);
      retA[key] = a;
      retB[key] = b;
    }
  }
  return [retA, retB];
}

const [outputA, outputB] = traverse(inputJSON);

fs.writeFileSync(
  "french.out.yaml",
  "---\n" + YAML.stringify(outputA) + "\n---\n"
);
fs.writeFileSync(
  "english.out.yaml",
  "---\n" + YAML.stringify(outputB) + "\n---\n"
);
