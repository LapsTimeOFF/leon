import * as https from 'https'
const options = {
  hostname: 'pastebin.com',
  port: 80,
  path: '/raw/06ELfNEE',
  method: 'GET'
}

const getOnlineVersion = function() {
     const req = https.request(options, res => {
          console.log(`statusCode: ${res.statusCode}`)
          res.on('data', d => {
            return d;
          })
     })
        
     req.on('error', error => {
          console.error(error)
     })
        
     req.end()
}

export { getOnlineVersion };