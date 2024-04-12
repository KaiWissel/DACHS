# DACHS

Welcome to DACHS, the **Dynamisches API-Cross-Country-Handling-System**; at least, this is what ChatGPT tells me what it is 🤷.

This tool helps download general flight data from the DHV-XC API and transform it into a CSV format.

## How to

### Prerequisites

#### Node.js

Install a Node.js version > 20

### Install

There are no dependencies within this project. Therefore no npm install is needed.

### Run

`node index.mjs`

### Filter

Adjust the data in config.mjs as needed. I hope the names are self explanatory. 

#### Sites

Important to node is that the site id is the important information within the filter. To find the site id create a filter on the DHV XC web view, hit the "Filter kopieren" button and extracted it from the URL.

For example the site Id within this 

```
https://de.dhv-xc.de/flights?d0=01.01.2019&d1=31.12.2023&fkto%5B%5D=9721&fkto%5B%5D=9724&l-fkto%5B%5D=Wenholthausen%20(DE)&l-fkto%5B%5D=Willingen%20Ettelsberg%20(DE)
```
URL are

```
9721 --> Wenholthausen (DE)
9724 --> Willingen Ettelsberg (DE)
```



