var sheds = [{
        name: "A",
        cows: 34,
        litrePerCow: 15,
    },
    {
        name: "B",
        cows: 11,
        litrePerCow: 28,
    },
    {
        name: "C",
        cows: 27,
        litrePerCow: 18,
    },
    {
        name: "D",
        cows: 52,
        litrePerCow: 11,
    }
];



















function totalProductionPerShed() {
    for (var i = 0; i < sheds.length; i++) {
        var perShed;
        perShed = sheds[i].cows * sheds[i].litrePerCow;
        console.log("Your production in Shed " + sheds[i].name + " " + perShed + " litres per shed");
        sheds[i].totalLitres = perShed;
    }
}
totalProductionPerShed();

function overallProducton() {
    sum = sheds[0].totalLitres + sheds[1].totalLitres + sheds[2].totalLitres + sheds[3].totalLitres;
    console.log("Your total production is " + " " + sum + " litres per day.");
    return sum;
}
overallProducton();
incomePerDay = overallProducton() * 45;
incomePerWeek = incomePerDay * 7;
incomePerYear = incomePerDay * 366;
console.log("Your daily income will be Ksh " + incomePerDay);
console.log("Your weekly income will be Ksh " + incomePerWeek);
console.log("Your yearly income will be Ksh " + incomePerYear);
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var daymonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
for (i = 0; i < months.length; i++) {
    sum = daymonth[i] * incomePerDay;
    console.log('Your income for ' + months[i] + ' is  Ksh' + sum)
}