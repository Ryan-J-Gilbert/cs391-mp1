function plus() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 + i2;
    negative();
}

function minus() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 - i2;
    negative();
}

function times() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 * i2;
    negative();
}

function divide() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    document.getElementById("result").innerHTML = i1 / i2;
    negative();
}

function power() {
    let i1 = parseFloat(document.getElementById("i1").value);
    let i2 = parseFloat(document.getElementById("i2").value);
    let res = i1;
    for (let i=1; i<i2; i++){
        res *= i1;
    }
    document.getElementById("result").innerHTML = res;
    negative();
}

function clear_box() {
    document.getElementById("i1").value = "";
    document.getElementById("i2").value = "";
    document.getElementById("result").innerHTML = "";
    negative();
}

function negative() {
    let result = document.getElementById("result")
    if (result.innerHTML < 0){
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}