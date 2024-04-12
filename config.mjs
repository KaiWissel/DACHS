export const baseUrl = "https://en.dhv-xc.de/api/fli/flights";

export const from = "01.01.2019";
export const till = "31.12.2023";

export const sites = [
  [9721, "Wenholthausen (DE)"],
  [9724, "Willingen Ettelsberg (DE)"],
  [10075, "Wixberg (DE)"],
  [9477, "Willingen Sonnenhang (DE)"],
  [11073, "Nordhelle-Werdohl (DE)"],
  [15104, "Stüppel NO (DE)"],
  [15196, "Stüppel NW (DE)"],
  [9761, "Stüppel-Fort Fun Abenteuerland (DE)"],
  [10755, "Düdinghausen (DE)"],
  [10070, "Bruchhauser Steine (DE)"],
];

export const fieldsToPick = [
  "FirstName",
  "LastName",
  "ClubName",
  "FlightStartTime",
  "FlightEndTime",
  "TakeoffWaypointName",
];

export const limit = 500;

export const csvDelimiter = ";";

export const outputPath = "./dachs-result.csv";
