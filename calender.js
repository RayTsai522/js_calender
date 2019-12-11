
var today = new Date();


var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var day = today.getDay();//星期幾 0~6

var thisMonth = new Date(year, month);

function getDate() {
  document.getElementById("year").innerHTML = year;
  document.getElementById("month").innerHTML = month + 1;
  document.getElementById("date").innerHTML = date;
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World<button>04ji3</button>";
  alert("ready go");
}
function writeCalender() {
  var str = '';
  var monthIndex = 0;
  var num = 1;
  var lastDate = 0;
  var longMonth = [0, 2, 4, 6, 7, 9, 11]

  if (longMonth.indexOf(thisMonth.getMonth()) != -1) {
    lastDate = 31;
  } else {
    if (thisMonth.getMonth() == 1) {
      if (thisMonth.getFullYear() % 4 == 0) {
        lastDate = 29;
      }else{
        lastDate = 28;
      }
    } else {
      lastDate = 30;
    }
  }

  for (var i = 1; i < 7; i++) {
    str = str + "<tr>";
    for (var j = 1; j < 8; j++) {
      if (num <= lastDate) {
        if (thisMonth.getDay() <= monthIndex) {
          str = str + "<td>" + num + "</td>";
          num = num + 1;
        } else {
          str = str + "<td></td>";
        }
      } else {
        str = str + "<td></td>";
      }
      monthIndex = monthIndex + 1;
    }
  }
  document.getElementById("calender-body").innerHTML = str + "</tr>";
}

function addLoadEvent(getDate) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = getDate;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      getDate();
    }
  }
}
addLoadEvent(getDate);
addLoadEvent(writeCalender);

// window.onload = writeCalender;


