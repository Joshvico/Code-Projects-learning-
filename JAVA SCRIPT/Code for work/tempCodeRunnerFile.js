console.log(sources);

function sourceInfoProvider(src)  {
  const objId = sources.map(obj => obj.sourceID.name.url);
  const objName = sources.map (obj =>obj.name);
  const objUrl = sources.map(obj => obj.url);

  const allSourceInfo = objId.concat(objName, objUrl);

return allSourceInfo;
}

console.log (sourceInfoProvider(sources));
