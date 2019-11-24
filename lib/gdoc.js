import axios from 'axios'

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
  } else {
    gdoc = gdoc.replace('line-height', 'no-line-height')
  }
  if(removeScript) {
    gdoc = gdoc.replace(/<script.*>.*<\/script>/, '')
  }
  // unwrap
  gdoc = gdoc.replace('<body>', '')
  gdoc = gdoc.replace('</body>', '')
  gdoc = gdoc.replace('<html>', '')
  gdoc = gdoc.replace('</html>', '')
  // clean up
  gdoc = gdoc.replace('<!DOCTYPE html>', '')
  return gdoc
}
