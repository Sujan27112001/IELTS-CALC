// Function to calculate band score
function calculateBand() {
  var listening = parseInt(document.getElementById("listening").value);
  var reading = parseInt(document.getElementById("reading").value);
  var writing = parseInt(document.getElementById("writing").value);
  var speaking = parseInt(document.getElementById("speaking").value);

  // Check if any field is empty
  if (isNaN(listening) || isNaN(reading) || isNaN(writing) || isNaN(speaking)) {
    alert("Please fill in all the fields.");
    return; // Exit the function if any field is empty
  }

  var totalScore = (listening + reading + writing + speaking) / 4;
  var bandScore = 0;

  if (totalScore <= 1) {
    bandScore = 1;
  } else if (totalScore <= 1.5) {
    bandScore = 2;
  } else if (totalScore <= 2.5) {
    bandScore = 3;
  } else if (totalScore <= 3.5) {
    bandScore = 4;
  } else if (totalScore <= 4.5) {
    bandScore = 5;
  } else if (totalScore <= 5.5) {
    bandScore = 6;
  } else if (totalScore <= 6.5) {
    bandScore = 7;
  } else if (totalScore <= 7.5) {
    bandScore = 8;
  } else if (totalScore <= 8.5) {
    bandScore = 9;
  } else {
    bandScore = 9;
  }

  document.getElementById("result").innerHTML = "Your Band Score is: " + bandScore;
}
