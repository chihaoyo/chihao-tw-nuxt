import axios from 'axios'
const parse = require('url-parse')

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

  // force remove scripts
  gdoc = gdoc.replace(/<script[^>]*>.*<\/script>/, '')

  // unwrap content
  gdoc = gdoc.replace(/<div id="contents"><style(.*)<\/style><div[^>]*>/, '<style$1</style><div class="content">')
  gdoc = gdoc.replace(/<\/div><\/div><\/body><\/html>$/, '<div class="divider"></div></div></body></html>')
  // FIXME: temp hack to unwrap content from <div id="contents"><div>...</div></div> DOM
  // also adding divider at end of doc

  console.log(gdoc)

  const replacements = []
  let images = gdoc.match(/<\s*p[^>]*><\s*span[^>]*><\s*img[^>]*><\s*\/\s*span><\s*\/\s*p>/g)
  images = images ? images : []
  images.forEach(match => {
    let replacement = null
    const pClassMatch = match.match(/p[^>]+class="([^"]+)"/)
    if(pClassMatch) {
      const originalMatch = pClassMatch[0]
      const originalClasses = pClassMatch[1]
      const newClasses = [originalClasses, 'gdoc-image-container'].join(' ')
      const matchUpdate = originalMatch.replace(originalClasses, newClasses)
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
    const hrefMatch = match.match(/href="(.+)"/)
    if(hrefMatch) {
      const url = hrefMatch[1]
      const parsed = parse(url, true)
      if(['google.com', 'www.google.com'].includes(parsed.host) && parsed.pathname === '/url') {
        replacement = match.replace(url, parsed.query.q)
      }
    }
    if(replacement && process.env.NODE_ENV === 'development') {
      replacement = replacement.replace('https://chihao.tw', '')
    }
    if(replacement) {
      replacements.push({
        find: match,
        replace: replacement
      })
    }
  })

  let hrs = gdoc.match(/<hr><p[^>]*><span[^>]*><\/span><\/p>/g)
  hrs = hrs ? hrs : []
  hrs.forEach(match => {
    replacements.push({
      find: match,
      replace: '<div class="divider"></div>'
    })
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
