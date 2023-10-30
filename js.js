var target = document.getElementById("btn");
target.addEventListener("click", function () {
  var eng = document.getElementById("eng").value;
  var urdu = document.getElementById("urdu").value;
  var islam = document.getElementById("islam").value;
  var ps = document.getElementById("ps").value;
  var maths = document.getElementById("maths").value;
  var Phy = document.getElementById("Phy").value;
  var chem = document.getElementById("chem").value;
  var bio = document.getElementById("bio").value;

  var total =
    Number(eng) +
    Number(urdu) +
    Number(islam) +
    Number(ps) +
    Number(maths) +
    Number(Phy) +
    Number(chem) +
    Number(bio);

  var per = (total * 100) / 1100;
  if (per >= 80 && per < 100) {
    var grade = "A You are pass";
  } else if (per >= 60 && per < 79) {
    var grade = "B you are Pass";
  } else if (per >= 40 && per < 59) {
    var grade = "C you are Pass";
  } else {
    var grade = "you are Fail";
  }

  document.getElementById("text").innerHTML = document.getElementById(
    "text"
  ).innerHTML = `Your Marks ${total} Out of 1100 <br> Your percentage is: ${per}%<br>Your grade is ${grade}`;
});
