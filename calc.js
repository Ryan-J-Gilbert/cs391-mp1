function plus() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 + i2;
}

function minus() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 - i2;
}

function times() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 * i2;
}

function divide() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 / i2;
}

function power() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    let res = i1;
    for (let i=1; i<i2; i++){
        res *= i1;
    }
    document.getElementById("result").innerHTML = res;
}

function clear_box() {
    document.getElementById("i1").value = "";
    document.getElementById("i2").value = "";
    document.getElementById("result").innerHTML = "";
}