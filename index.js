//https://rapidapi.com/apidojo/api/realty-in-us/

var axios = require('axios').default;

var options = {
  method: 'GET',
  url: 'https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale',
  params: {
    city: 'San Jose',
    state_code: 'CA',
    offset: '0',
    limit: '200',
    sort: 'newest',
    prop_type: 'single_family',
  },
  headers: {
    'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
    'x-rapidapi-key': 'dc20b5f580msh9b6f5b7e9167c35p17b1cbjsn5f92a9f1a3b2',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });


  