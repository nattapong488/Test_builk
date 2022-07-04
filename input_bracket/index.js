const inputString = document.getElementById("inputString");
const sendString = document.getElementById("sendString");
const message = document.getElementById("message");
const showOpen = document.getElementById("addOpen");
const showClose = document.getElementById("addclose");
const openPosition = document.getElementById("openPosition");
const closePosition = document.getElementById("closePosition");
const styleList = document.getElementById("style-list");

let arr = [];
let arr2 = [];

let countOpen = 0;
let countClose = 0;

// จำกัด Input ที่ใส่เข้ามา ใช้ Keypress
inputString.addEventListener("keydown", function (event) {
  if (
    !(
      (event.shiftKey && (event.key == ")" || event.key == "(")) ||
      event.key == "Backspace"
    )
  ) {
    event.preventDefault();
  }
});


// event Click
sendString.addEventListener("click", function storeArr() {
  if (inputString.value.length > 30) {
    alert("คุณใส่ข้อมูลเกิน");
    inputString.value = "";
  } else {
     message.style.border = "1px solid"
    // style for list
    styleList.style.listStyle = "disc";
   
    arr += inputString.value; //Store Input In Array

    let lastIndex = arr.length - 1; // last Item In Array
    let textClosePosition = ""; // เก็บข้อความวงเล็บปิด
    let textOpenPosition = "";

    function addBracket() {
      // First Index
      if (arr[0] == "(" && arr[1] == "(") {
        countClose++;
        textClosePosition += `ตำแหน่งที่ต้องใส่วงเล็บปิดคือ 2 `;
        console.log(`ตำแหน่งที่ต้องใส่วงเล็บปิดคือ 2 first`);
      } else if (arr[0] == ")") {
        countOpen++;
        textOpenPosition += "ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ 1 ";
        console.log("ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ 1");
      }

      //Centet Index
      for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] == "(" && arr[i + 1] == "(") {
          countClose++;
          if (textClosePosition === "") {
            textClosePosition += `ตำแหน่งที่ต้องใส่วงเล็บปิดคือ ${i + 2} `;
          } else {
            textClosePosition += ` และ ${i + 2}`;
          }

          console.log(`ตำแหน่งที่ต้องใส่วงเล็บปิดคือ ${i + 2} `);
        } else if (arr[i] == ")" && arr[i - 1] == ")") {
          if (i === 1) {
            countOpen++;
            if (textOpenPosition === "") {
              textOpenPosition += `ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ ${
                i + 1
              }`;
            } else {
              textOpenPosition += ` และ ${i + 1}`;
            }
            console.log(`ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ ${i + 1} `);
          } else {
            countOpen++;
            if (textOpenPosition === "") {
              textOpenPosition += `ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ ${i} `;
            } else {
              textOpenPosition += ` และ ${i} `;
            }
            console.log(`ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ ${i} `);
          }
        }
      }

      // last Index
      if (arr[arr.length - 1] == "(") {
        countClose++;

        if (textClosePosition === "") {
          textClosePosition += `ตำแหน่งที่ต้องใส่วงเล็บปิดคือ ${
            lastIndex + 2
          } `;
        } else {
          textClosePosition += ` และ ${lastIndex + 2}`;
        }
        console.log(`ตำแหน่งที่ต้องใส่วงเล็บปิดคือ ${lastIndex + 2} `);
      } else if (arr[arr.length - 1] == ")" && arr[lastIndex - 1] == ")") {
        countOpen++;
        if (textOpenPosition === "") {
          textOpenPosition += `ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ ${
            lastIndex + 1
          } `;
        } else {
          textOpenPosition += ` และ ${lastIndex + 1} `;
        }

        console.log(`ตำแหน่งที่ต้องใส่วงเล็บเปิดคือ ${lastIndex + 1} `);
      }
    }

    // Call Function addBracket
    addBracket();

    function amountBracket() {
      showOpen.textContent = `ต้องใส่วงเล็บเปิดเพิ่ม ${countOpen} ตัว`;
      showClose.textContent = `ต้องใส่วงเล็บปิดเพิ่ม ${countClose} ตัว`;
    }
    // Call function amountBracket
    amountBracket();

    function positionBracket() {
      closePosition.textContent = textClosePosition;
      openPosition.textContent = textOpenPosition;
    }
    // Call Function positionBracket
    positionBracket();

    // reset data
    arr = [];
    countOpen = 0;
    countClose = 0;
    // inputString.value = "";
  }
});
