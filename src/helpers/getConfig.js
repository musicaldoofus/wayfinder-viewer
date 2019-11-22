const axios = require('axios');

const getConfig = (hashKey, callback) => {
    //console.log('getConfig', hashKey);
    const reqUrl = `https://6bku93esbb.execute-api.us-west-2.amazonaws.com/prod/getWayfinderConfig?hashKey=${hashKey}`;
    axios.get(reqUrl)
        .then(d => {
            console.log('success from axios req', d);
            callback(d);
        })
        .catch(err => console.error('err', err));
    /*return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) resolve(this.responseText);
                //else reject(xhttp.responseText);
            }
            
        };
        xhttp.open("GET", reqUrl);
        xhttp.send();
    });*/
}

export default getConfig;