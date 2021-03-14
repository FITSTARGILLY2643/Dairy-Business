var k = "The respective values are : <br>";
var input = document.getElementsByName('array[]');

function show() {


    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        k = k + a.value + " " + "<br>";
    }


    document.getElementById("par").innerHTML = k;
    document.getElementById("po").innerHTML = "Output";
}

function production() {
    var shedA = (document.getElementById("one").value);
    var shedB = (document.getElementById("two").value);
    var shedC = (document.getElementById("three").value);
    var shedD = (document.getElementById("four").value);

    getElementById("one").innerHTML = shedA
    getElementById("two").innerHTML = shedB
    getElementById("three").innerHTML = shedC
    getElementById("four").innerHTML = shedD


}



production();