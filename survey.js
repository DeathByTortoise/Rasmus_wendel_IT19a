function A() {
var text1
var prp1 = prompt("Pleas enter your name", "here");
var prp4 = prompt("Pleas enter your last name", "here")
if (prp1 == null || prp1 == " ") {
text1 = "Null";
} else {
    text1 = "Your name is " + prp1 + " " + prp4;
}
document.getElementById("change1").innerHTML = text1;

var text2
var prp2 = prompt("Pleas enter your age", "here");
if (prp2 == null || prp2 == " ") {
text2 = "Null";
} else {
    text2 = "you are " + prp2 + " years old";
}
document.getElementById("change2").innerHTML = text2;

var text3
var prp3 = prompt("Pleas enter your gender", "here");
if (prp3 == null || prp3 == " ") {
text3 = "Null";
} else {
text3 = "and  you are " + prp3;
}
document.getElementById("change3").innerHTML = text3;
}
