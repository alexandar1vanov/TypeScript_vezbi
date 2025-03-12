function add(a, b) {
    return a + b;
}
function getAandB() {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    return [a, b];
}
function setResult(result) {
    var res = document.getElementById("result");
    if (res != null) {
        res.innerHTML = result;
    }
}
var addButton = document.getElementById("btn");
if (addButton != null) {
    addButton.onclick = function () {
        console.log("on btn click");
        var _a = getAandB(), a = _a[0], b = _a[1];
        setResult(add(parseInt(a.value), parseInt(b.value)).toString());
    };
}
document.getElementById("mul").onclick = function () {
    var _a = getAandB(), a = _a[0], b = _a[1];
    var av = parseInt(a.value);
    var bv = parseInt(b.value);
    var result = av * bv;
    setResult("".concat(av, " x ").concat(bv, " = ").concat(result));
};
