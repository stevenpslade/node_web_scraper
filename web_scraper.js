var request = require('request');

request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) // Show the HTML for the Substack images page.
    var cheerio = require('cheerio'),
      $ = cheerio.load(body);
      // console.log($('tr td:first-child').text()); get the file permissions
  }
});