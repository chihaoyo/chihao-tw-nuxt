import axios from 'axios'
const parse = require('url-parse')

const removeScript = true
const removeStyle = false

export async function getDoc(publicURL) {
  let gdoc = await axios.get(publicURL)
  gdoc = gdoc.data
  // trim lines
  gdoc = gdoc.split('\n').map(line => line.trim())
  gdoc = gdoc.join('')
  // remove
  gdoc = gdoc.replace(/<head.*>.*<\/head>/, '')
  // remove with condition
  if(removeStyle) {
    gdoc = gdoc.replace(/<style.*>.*<\/style>/, '')
  }
  // force remove styling attributes
  gdoc = gdoc.replace(/line-height/g, 'attr-disabled')

  if(removeScript) {
    gdoc = gdoc.replace(/<script.*>.*<\/script>/, '')
  }
  let replacements = []
  let images = gdoc.match(/<\s*p[^>]*><\s*span[^>]*><\s*img[^>]*><\s*\/\s*span><\s*\/\s*p>/g)
  images = images ? images : []
  images.forEach(match => {
    let replacement = null
    let pClassMatch = match.match(/p[^>]+class="([^"]+)"/)
    if(pClassMatch) {
      let originalMatch = pClassMatch[0]
      let originalClasses = pClassMatch[1]
      let newClasses = [originalClasses, 'gdoc-image-container'].join(' ')
      let matchUpdate = originalMatch.replace(originalClasses, newClasses)
      replacement = match.replace(originalMatch, matchUpdate)
    }
    if(replacement) {
      replacements.push({
        find: match,
        replace: replacement
      })
    }
  })

  let anchors = gdoc.match(/<\s*a[^>]*>(.*?)<\s*\/\s*a>/g) // (/<a [^>]+>[^<]+<\/a>/g)
  anchors = anchors ? anchors : []
  anchors.forEach(match => {
    let replacement = null
    let hrefMatch = match.match(/href="(.+)"/)
    if(hrefMatch) {
      let url = hrefMatch[1]
      let parsed = parse(url, true)
      if(['google.com', 'www.google.com'].includes(parsed.host) && parsed.pathname === '/url') {
        replacement = match.replace(url, parsed.query.q)
      }
    }
    if(replacement) {
      replacements.push({
        find: match,
        replace: replacement
      })
    }
  })
  replacements.forEach(replacement => {
    gdoc = gdoc.replace(replacement.find, replacement.replace)
  })

  // unwrap
  gdoc = gdoc.replace('<body>', '')
  gdoc = gdoc.replace('</body>', '')
  gdoc = gdoc.replace('<html>', '')
  gdoc = gdoc.replace('</html>', '')
  // clean up
  gdoc = gdoc.replace('<!DOCTYPE html>', '')
  return gdoc
}
