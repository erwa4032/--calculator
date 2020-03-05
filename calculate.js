
function d() {
    var textarea1 = document.getElementById("r1");

    let num = textarea1.value;



    alert("The area is " + twoDecimal(area(num)) + ",  The perimeter is " + twoDecimal(perimeter(num)));
}



function area(r) {
    return Math.PI * Math.pow(r, 2);
}

function perimeter(r) {
    return Math.PI * r * 2;
}


function twoDecimal(num) {
    return Math.round(num * 100) / 100;
}