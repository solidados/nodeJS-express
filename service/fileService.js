const uuid = require('uuid')
const path = require('node:path')

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpeg'
      const filePath = path.resolve('static', fileName)
      file.mv(filePath)
      return fileName;
    }
    catch (err) {
      console.error(err.message)
    }
  }
}

module.exports = new FileService()
