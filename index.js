const addonInterface = require('./addon');
const {getRouter} = require("stremio-addon-sdk");

serveHTTP(addonInterface, {port: 3000});
module.exports = getRouter(addonInterface);