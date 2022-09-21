

var url = 'https://www.fastmock.site/mock/3a3f35456ce095555d46f1e9cabb21c1/test/api/pittle';
var obj = {
    data:[
        {
            username1: 'example1'
        },
        {
            username2: 'example2'
        },
        {
            username3: 'example3'
        }
    ],
    deleteid:1
}


fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(obj), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));


