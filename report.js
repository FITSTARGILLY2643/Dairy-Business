var k = "The production for shed A,shed B,shed C and shed D are : ";
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

function TotalProducton() {
    sum = shedA + shedB + shedC + shedD;
    document.write("Your total production is " + " " + sum + " litres per day.");
    return sum;
}
TotalProducton()

incomePerDay = TotalProducton() * 45;
incomePerWeek = incomePerDay * 7;
incomePerYear = incomePerDay * 366;
document.write("Your daily income will be Ksh " + incomePerDay);
document.write("Your weekly income will be Ksh " + incomePerWeek);
document.write("Your yearly income will be Ksh " + incomePerYear);
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daymonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (i = 0; i < months.length; i++) {
    sum = daymonth[i] * incomePerDay;
    document.write('Your income for ' + months[i] + ' is  Ksh' + sum)
}