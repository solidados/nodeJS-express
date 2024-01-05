const uuid = require('uuid')
const path = require('node:path')

class FileService {
  async saveFile(file) {
    try {
      const fileName = `${uuid.v4()}.jpeg`
      const filePath = path.resolve(__dirname, 'static', fileName)
      await file.mv(filePath)
      return fileName;
    }
    catch (err) {
      console.error(err.message)
    }
  }
}

module.exports = new FileService()
