// input number
const number1 = document.getElementById("input-1");
const number2 = document.getElementById("input-2");
const number3 = document.getElementById("input-3");
const number4 = document.getElementById("input-4");

// show number
const show1 = document.getElementById("show-1");
const show2 = document.getElementById("show-2");
const show3 = document.getElementById("show-3");
const show4 = document.getElementById("show-4");

// button
const btnCalculate = document.getElementById("btn");
const result = document.getElementById("result");
let n1 = [];
let n2 = [];
let n3 = [];
let n4 = [];

function Input1(val) {
  n1 = parseInt(val);
  show1.innerHTML = parseInt(val);
}

function Input2(val) {
  n2 = parseInt(val);
  show2.innerHTML = parseInt(val);
}
function Input3(val) {
  n3 = parseInt(val);
  show3.innerHTML = parseInt(val);
}
function Input4(val) {
  n4 = parseInt(val);
  show4.innerHTML = parseInt(val);
}

function recieveInput() {
  if (
    n1 !== n2 &&
    n1 !== n3 &&
    n1 !== n4 &&
    n2 !== n3 &&
    n2 !== n4 &&
    n3 !== n4
  ) {
    let ga = [];
    // result.innerHTML = `${n1} + ${n2} + ${n3} + ${n4}`;
    result.innerHTML = cal24(n1, n2, n3, n4);
    // console.log(n1 + n2 + n3 + n4);
  } else {
    number1.value = "";
    number2.value = "";
    number3.value = "";
    number4.value = "";

    show1.innerHTML = 1;
    show2.innerHTML = 2;
    show3.innerHTML = 3;
    show4.innerHTML = 4;

    result.innerHTML = " ";
    alert("ตัวเลขซ้ำกัน ใส่ตัวเลขใหม่อีกรอบ");
  }
}

function cal24(num1, num2, num3, num4) {
  if (num1 * num2 + num3 + num4 === 24) {
    return `${num1} * ${num2} + ${num3} + ${num4}`
  } else if (num1 * num2 + num3 - num4 === 24) {
    return  `${num1} * ${num2} + ${num3} - ${num4}`
  } else if (num1 * num2 - num3 + num4 === 24) {
    return  `${num1} * ${num2} - ${num3} + ${num4}`
  }else if (num1 * num2 - num3 - num4 === 24) {
    return  `${num1}*${num2}-${num3}-${num4}`
  }
   else {
    // result.style.alignItems="center"
    return "ชุดนี้ไม่สามารถทำให้ผลลัพธ์กลายเป็น 24 ได้";
  }
  // console.log(num1,num2,num3,num4)
}
