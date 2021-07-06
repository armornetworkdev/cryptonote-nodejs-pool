/* Pool server host to instruct your miners to point to (override daemon setting if set) */
var poolHost = "poolhost.com";

/* Must point to the API setup in your config.json file. */
//var api = "http://poolhost:4009";           //HTTP API - Pool-Frontend can be available via HTTP.
//var api = "http://"+poolHost+":4009";       //HTTP API on poolHost.

/*
  To raise this too, with HTTP API, on start pool,
  need to set "(config.json).api.ssl = true", and use valid SSL certificates and keys)
  
  Self-Assigned SSL Certificate and key, can be generated,
  by this guide: https://gist.github.com/username1565/7321d63b44e1241f992c00d76b833c9a
*/
//var api = "https://your-api.pool.com:4010";   //HTTPS API - Pool-Frontend can be available via HTTPS, and requests on HTTP-API is unsecure.
var api = "https://"+poolHost+".com:4010";   //HTTPS API - on poolHost
var apiMerged = "";

/* Must match the "coin"-value in coin config.json, else this will be displayed twice... */
var parentCoin = "Armor"; //when '"coin": "Armor"' in coin config.json

/* Number of coin decimals places (override daemon setting if set) */
var coinDecimalPlaces = 8;

/* Contact email address. */
var email = "support@poolhost.com";

/* Pool Telegram URL. */
var telegram = "https://t.me/YourPool";

/* Pool Discord URL */
var discord = "https://discordapp.com/invite/YourPool";

/*Pool Facebook URL */
var facebook = "https://www.facebook.com/<YourPoolFacebook";

/* Market stat display params from https://www.cryptonator.com/widget */
var marketCurrencies = ["{symbol}-BTC", "{symbol}-USD", "{symbol}-EUR", "{symbol}-CAD"];

/* Used for front-end block links. */
var blockchainExplorer = "https://explorer.armornetwork.org/{symbol}/block/{id}";
var blockchainExplorerMerged = "https://explorer.armornetwork.org/?hash={id}#block";

/* Used by front-end transaction links. */
var transactionExplorer = "https://explorer.armornetwork.org/{symbol}/transaction/{id}";
var transactionExplorerMerged = "https://explorer.armornetwork.org/?hash={id}#transaction";

/* Any custom CSS theme for pool frontend */
var themeCss = "themes/default.css";

/* Default language */
var defaultLang = 'en';
