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
  let ret;
  if (typeof obj === "string") {
    if (obj.match("!")) {
      ret = obj.split(/\s*!\s*/);
    } else {
      ret = [obj, obj];
    }
    ret = ret.map((string, i) =>
      string
        .trim()
        .replace(
          /(\d\d)\/(\d\d\d\d)/g,
          (_, month, year) => months[i][Number(month) - 1] + "\\ " + year
        )
    );
  } else if (Array.isArray(obj)) {
    ret = [[], []];
    for (const elt of obj) {
      traverse(elt).forEach((val, i) => {
        ret[i].push(val);
      });
    }
  } else {
    ret = [{}, {}];
    for (const [key, value] of Object.entries(obj)) {
      traverse(value).forEach((val, i) => {
        ret[i][key] = val;
      });
    }
  }
  return ret;
}

const output = traverse(inputJSON);

for (const [lang, i] of [
  ["french", 0],
  ["english", 1],
]) {
  fs.writeFileSync(
    `${lang}.out.yaml`,
    "---\n" + YAML.stringify(output[i]) + "\n---\n"
  );
}
