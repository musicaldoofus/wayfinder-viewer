const getConfig = (/*id*/) => {
    const reqUrl = 'https://managing-underperformance.s3-us-west-2.amazonaws.com/mockWayfinderConfig.json';
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) resolve(this.responseText);
        };
        //add error handling using reject(err)
        xhttp.open("GET", reqUrl);
        xhttp.send();
    });
}

export default getConfig;