const request = require("request");
const fs = require("fs");

const fetchWrite = {
   saveFile: (url, data) => {
      console.log('Saving...');
      fs.writeFile(url, data, (e) => {
         (e) ? console.log(e) : console.log('Saved');
      });
   },
   fetchData: (url, cb) => {
      console.log('Loading...');
      request.get(url, (err, header, data) => {
         if (err) console.log(err)
         else cb(data);
      })
   }
}
module.exports = fetchWrite;