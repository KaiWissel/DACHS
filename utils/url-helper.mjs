import { baseUrl, from, limit, sites, till } from "../config.mjs";

// export const createSitesParam = () =>
// "fkto[]=9721&fkto[]=9724&l-fkto[]=Wenholthausen (DE)&l-fkto[]=Willingen Ettelsberg (DE)";
export const createSitesParam = () =>
  sites
    .map((e) => `fkto[]=${e[0]}`)
    .join("&")
    .toString();

export const createTimeSpanParam = () => `d0=${from}&d1=${till}`;

export const createNavParam = (startIndex) =>
  `navpars={"start":${startIndex},"limit":${limit},"sort":[{"field":"FlightDate","dir":-1},{"field":"BestTaskPoints","dir":-1}]}`;

export const createUrl = (startIndex) =>
  `${baseUrl}?${createTimeSpanParam()}&${createSitesParam()}&${createNavParam(startIndex)}`;
