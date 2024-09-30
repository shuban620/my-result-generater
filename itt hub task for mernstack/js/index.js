function calculate() {
    var a = parseInt(document.getElementById("txtnum1").value);
    var b = parseInt(document.getElementById("txtnum2").value);
    var c = parseInt(document.getElementById("txtnum3").value);
    var d = parseInt(document.getElementById("txtnum4").value);
    var e = parseInt(document.getElementById("txtnum5").value);
    
    var result = a + b + c + d + e;
    var avg = result / 5;

    // Output the result and average
    var output = "The obtained marks are : " + result + "<br>";
    output += "The average of the numbers is: " + avg + "<br>";

    if (avg >= 50) {
        output += "Pass<br>";
        document.getElementsByClassName("result")[0].innerHTML = "congratulations! You have passed the exam.";
    } else {
        output += "Fail<br>";
        document.getElementsByClassName("result")[0].innerHTML = "Sorry! You have failed the exam.";
    }

    document.getElementById("output").innerHTML = output;
}