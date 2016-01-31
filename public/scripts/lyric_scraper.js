var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://www.genius.com/Mac-miller-diablo-lyrics";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      lyrics = $(".referent").text();
      console.log(lyrics)
    ;
  } else {
    console.log("We’ve encountered an error: " + error);
  }
}); 
