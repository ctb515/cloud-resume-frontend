function visitorCounter() {
  fetch("https://kvshqndl17.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then((response) => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML = body;
    });
}
