var form = document.querySelector("form");
var FD = new FormData(form);
var formDisplay = document.getElementById("myDIV");
var successDisplay = document.getElementById("myDIV2");
form.addEventListener( "submit", function ( event ) {
  FD = new FormData(form);
  event.preventDefault();
  formDisplay.style.display = "none";
  successDisplay.style.display = "block";
  fetch("<replace with URL>", { //Replace <replace with URL> with URL of API when you want to POST to //
    method: "POST",
    mode: "no-cors",
    body: FD,
    headers: {
      "Access-Control-Allow-Origin": "*",
     }
  })
 } ); 


