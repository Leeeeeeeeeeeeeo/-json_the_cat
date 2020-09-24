
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}` , (error, response, body) => {
  if(error){
    callback(error)
  }
  const data = JSON.parse(body);  
  const description = data[0].description

  if(!error) callback(null,description);
  
  });
}  

module.exports = { fetchBreedDescription };



// fetchBreedDescription('Siberian', (error, description) {

// });