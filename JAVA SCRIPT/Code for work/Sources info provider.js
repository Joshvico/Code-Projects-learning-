const sources = [
  {
    sourceID: "ABC123XYZ",
    name: "Source A",
    date: "2023-01-15", // Replace with an actual date
    lastUpdate: "2023-02-10", // Replace with an actual date
    type: "Type1",
    url: "https://example.com/api/data/abc123"
  },
  {
    sourceID: "DEF456UVW",
    name: "Source B",
    date: "2023-01-20", // Replace with an actual date
    lastUpdate: "2023-02-05", // Replace with an actual date
    type: "Type2",
    url: "https://example.net/api/info/def456"
  },
  {
    sourceID: "GHI789LMN",
    name: "Source C",
    date: "2023-01-25", // Replace with an actual date
    lastUpdate: "2023-02-01", // Replace with an actual date
    type: "Type3",
    url: "https://example.org/api/stats/ghi789"
  },
];
// Print the array of objects
/* console.log(sources);

function sourceInfoProvider(src)  {
  const objId = sources.map(obj => obj.sourceID.name.url);
  const objName = sources.map (obj =>obj.name);
  const objUrl = sources.map(obj => obj.url);

  const allSourceInfo = objId.concat(objName, objUrl);

return allSourceInfo;
}

console.log (sourceInfoProvider(sources));
 */
/* function sourceInfoProvider(obj) {
  const allSourceInfo = sources.map(obj => ({
    sourceID: obj.sourceID,
    name: obj.name,
    url: obj.url
  }));

  return allSourceInfo;
}

// Example usage with your `sources` array
console.log(sourceInfoProvider(sources)); */

function sourceInfoProvider(sources) {
  const objId = sources.map(obj => obj.sourceID);
  const objName = sources.map(obj => obj.name);
  const objUrl = sources.map(obj => obj.url);

  return {
    sourceID: objId,
    name: objName,
    url: objUrl
  };
}

// Example usage with your `sources` array
console.log(sourceInfoProvider(sources));


