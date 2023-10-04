document.getElementById("demoButton").addEventListener("click", function() {
    // Send an HTTP request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5000/run-python", true);
    xhr.send();
  });

  document.getElementById("livebutton").addEventListener("click", function() {
    // Send an HTTP request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:5001/run-python", true);  
    xhr.send();
  });
  