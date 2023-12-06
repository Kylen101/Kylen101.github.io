function promptFunction() {
  let namePrompt = prompt("Please enter your name", "Lazy user");
  if (namePrompt != null) {
    document.getElementById("nameDisplay").innerHTML =
    "Hello " + namePrompt + "! I am going to beat you up!";
  }
}
