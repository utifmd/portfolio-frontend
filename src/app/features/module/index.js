import imageCompression from "browser-image-compression"

export const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
})

export const toLowerImage = (imageFile, options = {
    maxSizeMB: 0.5, //1,
    maxWidthOrHeight: 480, //1920,
    useWebWorker: true
}) => new Promise((resolve, reject) => {
    try {
        const compressedFile = imageCompression(imageFile, options) // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob) // true // console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`) // smaller than maxSizeMB

        resolve(compressedFile) //uploadToServer(compressedFile); // write your own logic
    } catch (error) {
        reject(error.message)
    }
})