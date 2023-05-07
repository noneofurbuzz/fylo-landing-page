function email() {
    var x = document.getElementById("email");
    var y = document.getElementById("validation");
    var z = document.getElementById("thank-you");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (x.value.match(validRegex)) {
        y.style.display = "none";
        z.style.display = "block";
        x.value = "";

    }else {
        y.style.display = "block";
        z.style.display = "none";
        x.value = "";  
    }
  }
  
  function on_focus(){
    var x = document.getElementById("email");
    var y = document.getElementById("validation");
    var z = document.getElementById("thank-you");
    y.style.display = "none";
    z.style.display = "none";
  }