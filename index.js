const hourEl = document.querySelector("#numOfhoure");
const minetesEl = document.querySelector("#numOfmin");
const secondesEl = document.querySelector("#numOfsec");
const ampmEl = document.querySelector(".ampm");

function updatClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  ampmEl.innerHTML = h > 12 ? `PM` : `AM`;

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  hourEl.innerHTML = h;
  minetesEl.innerHTML = m;
  secondesEl.innerHTML = s;
  setTimeout(() => {
    updatClock();
  }, 1000);
}
updatClock();

const dayEl = document.querySelector("#numOfday");
const monthEl = document.querySelector("#numOfMonth");
const yearEl = document.querySelector("#numOfYears");
const weekEl = document.querySelector(".Week");

function updatD() {
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let Week = Date().split(" ")[0];

  dayEl.innerHTML = day;
  monthEl.innerHTML = month;
  yearEl.innerHTML = year;
  weekEl.innerHTML = Week;

  setTimeout(() => {
    updatD();
  }, 1000);
}

updatD();
