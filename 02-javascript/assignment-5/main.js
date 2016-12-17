function calculate() {
    var years = document.getElementById("years");
    //console.log(years.value);
    var months = years.value * 12;
    var table = document.getElementById("results_table");
    //console.log(table);
    var amountObject = document.getElementById("amount");
    var amount = parseFloat(amountObject.value);
    var rate = parseFloat(document.getElementById("rate").value);
    //console.log(typeof rate);


    //gernerate a table
    var tableV = "";
    tableV = "<table><tr><th>Month</th><th>Interest</th><th>Balance</th></tr>";
    for(var i = 1; i <= months; i++){
        //amount += amount*((rate/100)/12);
        var interV = Math.round(amount * ((rate/100)/12)*100)/100;
        tableV += "<tr><td>" + i + "</td><td>" +
            interV.toFixed(2) +
            "</td><td>" + (amount+interV).toFixed(2) + "</td></tr>";
        amount = amount + Math.round(interV*100)/100;
    }
    tableV += "</table>";
    table.innerHTML = tableV;
    //finish the table
}