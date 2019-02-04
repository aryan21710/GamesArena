const url='http://starlord.hackerearth.com/gamesarena';
const proxyurl = "https://cors-anywhere.herokuapp.com/";
console.log('inside delete me');
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
        .then(response => response.text())
        .then(contents => {console.log('contents:-'+contents)})
        .catch(err=>{console.log('cant access:-'+err)})



