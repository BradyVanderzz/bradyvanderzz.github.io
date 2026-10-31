function copyText() {

  navigator.clipboard.writeText("vanderweelebrady@gmail.com");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied Email";
}

function copyOut() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Click to Copy";
}