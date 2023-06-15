function myFunction() {
    var x = document.querySelector(".nav-menu");
    if (x.style.height === "0px") {
      x.style.height = "160px";
    } else {
      x.style.height = "0px";
    }
  }