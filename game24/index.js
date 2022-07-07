let oper = ["+", "-", "*", "/"];
let oper2 = ["+", "-", "*", "/"];
let oper3 = ["+", "-", "*", "/"];

let num1 = "";
let num2 = "";
let num3 = "";
let num4 = "";

// add value in variable
function store1(val) {
  num1 = val;
}
function store2(val) {
  num2 = val;
}
function store3(val) {
  num3 = val;
}
function store4(val) {
  num4 = val;
}

// let arr1 = oper.map((item) => {
//   return item;
// });
// console.log(arr1);

let keep = "";

function cal() {
  let text = [];

  if (
    num1 !== num2 &&
    num1 !== num3 &&
    num1 !== num4 &&
    num2 !== num3 &&
    num2 !== num4 &&
    num3 !== num4
  ) {
    var checkInput = false;
    // try {
    for (let i = 0; i < oper.length; i++) {
      for (let j = 0; j < oper2.length; j++) {
        for (let k = 0; k < oper3.length; k++) {
          text = ` ${num1} ${oper[i]} ${num2}  ${oper[j]} ${num3} ${oper[k]} ${num4}`;
          let func = eval(text);
          // console.log(func);
          if (func === 24) {
            document.getElementById("message").innerHTML = text + "<br>";
            checkInput = true;
          }
        }
      }
      // keep = num1 + oper[i] +num2;
    }
    // }
    // catch (error) {

    //   document.getElementById("message").innerHTML =
    //     "eror Program can't calculate";
    // }
  } else {
    check = true;
    reset();
    alert("ห้ามตัวเลขซ้ำกัน");
  }

  function check() {
    if (checkInput == false) {
      document.getElementById("message").innerHTML = "";
      alert("ตัวเลขชุดนี้ไม่สามารถทำให้ผลลัพธ์กลายเป็น 24 ได้");
    }
    else{
      
    }
  }

  function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
  }
  // let changeCheck = () => {
  //   checkInput = false;
  // };

  check();
  reset();

  // console.log(text);
  // console.log(num1);
  // document.getElementById("message").innerHTML = func;
}
