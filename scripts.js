var form = document.querySelector("form");
var FD = new FormData(form);
form.addEventListener( "submit", function ( event ) {
    FD = new FormData(form);
    event.preventDefault();
    onCaseSubmit();
    fetch("<replace with URL>", { //Replace <replace with URL> with URL of API when you want to POST to //
      method: "POST",
      mode: "no-cors",
      body: FD,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
  } );

  function onCaseSubmit() {
    var formDisplay = document.getElementById("myDIV"); //myDiv contains the form // 
    switch(formDisplay) {
      case "none":
      formDisplay.style.display = "block";
      break;
      default:
      formDisplay.style.display = "none";
      break;
    }

    var successDisplay = document.getElementById("myDIV2"); //myDIV2 contains the post form submit message// 
    switch(successDisplay) {
      case "none":
      successDisplay.style.display = "block";
      break;
      default:
      successDisplay.style.display = "block";
      break;
    }
  }
