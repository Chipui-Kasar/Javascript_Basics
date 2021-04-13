document.addEventListener("DOMContentLoaded", () => {
  setInterval(changeBirdImage, 5000); // 5000 mili seconds
  function changeBirdImage() {
    console.log("entering here");

    var data = document.getElementById("sample").innerHTML;
    var datarewrite = "hello advance javscript";
    document.getElementById("sample").innerHTML = datarewrite;
    console.log(` the data we are looking is "${data}"`); //checking in console )HTML Page

    var birdImage = document.getElementById("bird");
    birdImage.setAttribute("src", "sample2.jpg");
  }
});
