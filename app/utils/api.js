const _baseURL = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' +
    'apiKey=82cb16f386e1468f83728d7a295baedd';

async function testApi() {
    const req = new Request(_baseURL);
    console.log(req);
    const response = await fetch(req)
        //.then(function (response) {
       //    console.log(response.json());
      //  })
    return response.json();

}

module.exports = {
    testApi : testApi
}