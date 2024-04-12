import { writeFileSync } from "fs";
import { csvDelimiter, fieldsToPick, limit, outputPath } from "./config.mjs";
import { pick } from "./utils/common.mjs";
import { fetchData } from "./utils/fetch.mjs";
import { createUrl } from "./utils/url-helper.mjs";

const flights = [];
let totalCount;

console.log("First request to estimate total count");
const response = await fetchData(createUrl(0));

totalCount = response.meta.totalCount;
console.log(`Total number of flights for this query is ${totalCount}`);
flights.push(...response.data);

const numberOfChunks = Math.ceil(totalCount / limit);
console.log(`Will try to retrieve remaining flights with ${numberOfChunks} more requests`);

for (let index = 1; index <= numberOfChunks; index++) {
  const nextResponse = await fetchData(createUrl(index * limit));
  flights.push(...nextResponse.data);
}

const pickedData = flights.map((f) => pick(f, ...fieldsToPick));
const csvData = pickedData.map((e) => Object.values(e).join(csvDelimiter)).join("\n");

writeFileSync(outputPath, csvData, { encoding: "utf-8" });

console.log(`Exported data to ${outputPath}`);
