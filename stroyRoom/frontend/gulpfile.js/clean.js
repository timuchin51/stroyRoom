const del = require(`del`)

module.exports = async function clean(cb) {
  const deletedDirectoryPath = await del(`build`)
  console.log(`Deleted directories:` + deletedDirectoryPath)
  cb()
}
