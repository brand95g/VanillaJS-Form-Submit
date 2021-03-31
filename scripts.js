var form = document.querySelector("form");
var FD = new FormData(form);
form.addEventListener( "submit", function ( event ) {
    FD = new FormData(form);
    event.preventDefault();
    onCaseSubmit();
    fetch("<replace with URL>", {
      method: "POST",
      mode: "no-cors",
      body: FD,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
  } );

  function onCaseSubmit() {
    var formDisplay = document.getElementById("myDIV");
    switch(formDisplay) {
      case "none":
      formDisplay.style.display = "block";
      break;
      default:
      formDisplay.style.display = "none";
      break;
    }

    var successDisplay = document.getElementById("myDIV2");
    switch(successDisplay) {
      case "none":
      successDisplay.style.display = "block";
      break;
      default:
      successDisplay.style.display = "block";
      break;
    }
  }
