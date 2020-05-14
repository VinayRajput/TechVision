const fetchWrite = require("./library/fetchWrite");
const data = fetchWrite.fetchData('https://jsonplaceholder.typicode.com/todos', (data) => {
   data = JSON.parse(data);
   fetchWrite.saveFile('./Data.json', JSON.stringify(data));
});

//fetchData("https://jsonplaceholder.typicode.com/posts/1/comments");
//fetchData('https://www.bridgestone.com.sg/bin/bridgestone/consumer/api/v1/vehicle/model.json?year=2018&make=%2Fcontent%2Fdata%2Fbridgestone%2Fconsumer%2Fvehicles%2F2018%2Fmercedes-benz&language=en&country=SG');

