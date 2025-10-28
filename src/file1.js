/**
 * Define JSON
 * @typedef {string} JSON
 */

/** Filter out ads, surveys and posts
 * @param {JSON} json - data to be filtered
 * @returns {JSON} - JSON that is videos only
 */
function getOnlyVideoData(json) {
  const newJson = json.filter(function (item) {
    return (
      item.titleUrl !== undefined &&
      !item.titleUrl.includes("www.youtube.com/post") &&
      item.details === undefined
    );
  });
  return newJson;
}
