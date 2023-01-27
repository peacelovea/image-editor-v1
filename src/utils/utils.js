// Font Face Observer 是一个小型@font-face加载器和监视器
import FontFaceObserver from 'fontfaceobserver'

/**
 * @description: 根据json模板下载字体文件
 * @param {String} str
 * @return {Promise}
 */
export const downFontByJSON = (str) => {
  const skipFonts = ['arial', 'Microsoft YaHei']
  const fontFamilys = JSON.parse(str).objects.filter(item => {
    // 为text 并且不为包含字体
    return (item.type.includes('text') && !skipFonts.includes(item.fontFamily))
  }).map(item => item.fontFamily)

  const fontFamilyAll = fontFamilys.map(fontName => {
    const font = new FontFaceObserver(fontName)
    return font.load(null, 150000)
  })
  return Promise.all(fontFamilyAll)
}

/**
 * @description: 图片文件转字符串
 * @param {Blob|File} file 文件
 * @return {String}
 */
export function getImgStr (file) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result)
      }
    } catch (error) {
      reject(error)
    }
  })
}
