const sources = [
  {
    sourceID: "ABC123XYZ",
    name: "Source A",
    date: "2023-01-15",
    lastUpdate: "2023-02-10",
    type: "Type1",
    url: "https://example.com/api/data/abc123"
  },
  {
    sourceID: "DEF456UVW",
    name: "Source B",
    date: "2023-01-20",
    lastUpdate: "2023-02-05",
    type: "Type2",
    url: "https://example.net/api/info/def456"
  },
  {
    sourceID: "GHI789LMN",
    name: "Source C",
    date: "2023-01-25",
    lastUpdate: "2023-02-01",
    type: "Type3",
    url: "https://example.org/api/stats/ghi789"
  },
];

function filteringObjInfo(obj, ...properties) {
  return obj.map(item => {
    let selectedData = {};
    properties.forEach(property => {
      selectedData[property] = item[property];
    });
    return selectedData;
  });
}

console.log(filteringObjInfo(sources, "sourceID", "name", "url"));