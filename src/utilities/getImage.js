const context = require.context("../images", true);

export function getImage(name) {
  return context(`./${name}`);
}
