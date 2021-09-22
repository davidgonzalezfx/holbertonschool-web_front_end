function createElement(data) {
  const p = document.createElement("P");
  p.innerText = data;

  const body = document.querySelector("body");
  body.appendChild(p);
}

function queryWikipedia(callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(xhttp.response.query.pages["21721040"].extract);
    }
  };
  const URL =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

  xhttp.open("GET", URL, true);
  xhttp.responseType = "json";
  xhttp.send(null);
}

queryWikipedia(createElement);
