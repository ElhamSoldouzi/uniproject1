function convertText() {
  var input = document.getElementById("inputText").value;
  var output = "";

  for (var i = 0; i < input.length; i++) {
    var char = input[i];

    if (char >= "a" && char <= "z") {
      output += String.fromCharCode(char.charCodeAt(0) - 32);
    } else if (char >= "A" && char <= "Z") {
      output += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      output += char;
    }
  }

  let resultElement = document.querySelector("#result");
  resultElement.innerHTML = output;
}
