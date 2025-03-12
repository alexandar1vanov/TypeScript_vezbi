
function add(a: number, b: number): number {
    return a + b;
  }
  
  function getAandB() {
    const a = document.getElementById("a") as HTMLInputElement;
    const b = document.getElementById("b") as HTMLInputElement;
    return [a, b];
  }
  
  function setResult(result: string) {
    const res = document.getElementById("result");
    if (res != null) {
      res.innerHTML = result;
    }
  }
  
  const addButton = document.getElementById("btn");
  if (addButton != null) {
    addButton.onclick = function () {
      console.log("on btn click");
      const [a, b] = getAandB();
      setResult(add(parseInt(a.value), parseInt(b.value)).toString());
    };
  }
  
  document.getElementById("mul")!!.onclick = function () {
    const [a, b] = getAandB();
    const av = parseInt(a.value);
    const bv = parseInt(b.value);
    const result = av * bv;
    setResult(`${av} x ${bv} = ${result}`);
  };
  