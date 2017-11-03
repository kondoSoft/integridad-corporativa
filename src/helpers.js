const http = require('http')

/**
 * [Helper para realizar peticiones http metodo "GET"]
 * @param  {[OBJECT]} options  [Objeto con las optiones de la peticion, referencia de documentacion: https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_http_request_options_callback]
 * @return {[Promise]}         [Retorna una promesa con el resultado de la peticion o el error]
 */
export const httpRequest = (options) => {
  return new Promise((resolve, reject) => {
    http.get(options, (res) => {
      res.on('data', (buf) => {
        let result = buf.toString('utf8')
        resolve(result)
      })
      res.on('error', (err) => {
        reject(err)
      })
    })
  })
}
