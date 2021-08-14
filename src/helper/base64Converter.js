export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

export const blobToBase64 = (blob) => {
  var reader = new FileReader()
  reader.readAsDataURL(blob)
  reader.onloadend = function () {
    var base64data = reader.result
    console.log(base64data)
  }
}
