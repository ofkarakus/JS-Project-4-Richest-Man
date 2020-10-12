const displayInfoElement = document.querySelector(".display__info");

class RichPersonList {
  constructor(list) {
    this.list = list;
    this.addUser();
    this.addUser();
    this.addUser();
  }

  addUser() {
    document.querySelector("#nameWealth")
      ? document.querySelector("#nameWealth").remove()
      : null;

    this.randomNum = Math.floor(Math.random() * this.list.length);

    let divElement = document.createElement("div");
    let pElement1 = document.createElement("p");
    let pElement2 = document.createElement("p");

    divElement.setAttribute("class", "nameWealth");
    pElement2.setAttribute("class", "money");

    pElement1.innerText = this.list[this.randomNum].name;
    pElement2.innerText = `$${parseInt(
      this.list[this.randomNum].wealth
    ).toLocaleString("en", { minimumFractionDigits: 2 })}`;

    divElement.appendChild(pElement1);
    divElement.appendChild(pElement2);

    this.display(divElement);

    this.list.splice(this.randomNum, 1);
  }

  display(x) {
    displayInfoElement.appendChild(x);
  }

  doubleMoney() {
    document.querySelector("#nameWealth")
      ? document.querySelector("#nameWealth").remove()
      : null;

    let money = document.querySelectorAll(".money");
    money.forEach((i) => {
      let x = i.innerText.replaceAll(",", "");
      x = x.replace("$", "");
      x = x * 2;
      i.innerText = `$${x.toLocaleString("en", { minimumFractionDigits: 2 })}`;
    });
  }

  showMillionaires() {
    document.querySelector("#nameWealth")
      ? document.querySelector("#nameWealth").remove()
      : null;

    let divElement = document.querySelectorAll(".nameWealth");
    divElement.forEach((i) => {
      let x = i.children[1].innerText.replaceAll(",", "");
      x = x.replace("$", "");
      if (x < 999999) {
        i.remove();
        this.list.push({ name: i.children[0].innerText, wealth: x });
      }
    });
  }

  sortByMoney() {
    let divElement = document.querySelectorAll(".nameWealth");
    var divElementArr = Array.prototype.slice.call(divElement, 0);
    let sortedDivElement = divElementArr.sort(function (a, b) {
      a = a.children[1].innerText.replaceAll(",", "");
      a = a.replace("$", "");
      b = b.children[1].innerText.replaceAll(",", "");
      b = b.replace("$", "");
      return b - a;
    });
    displayInfoElement.innerHTML = "";
    sortedDivElement.forEach((i) => displayInfoElement.appendChild(i));
  }

  calculateTotal() {
    let divElement = document.createElement("div");
    divElement.setAttribute("id", "nameWealth");

    let pElement1 = document.createElement("p");
    let pElement2 = document.createElement("p");
    let money = document.querySelectorAll(".money");
    let total = 0;

    money.forEach((i) => {
      i = i.innerText.replaceAll(",", "");
      i = i.replace("$", "");
      total += parseInt(i);
    });

    divElement.appendChild(pElement1);
    divElement.appendChild(pElement2);

    pElement1.innerText = "Total Wealth:";
    pElement2.innerText = `$${total.toLocaleString("en", {
      minimumFractionDigits: 2,
    })}`;

    this.display(divElement);
  }
}

const data = [
  { name: "Ahmet", wealth: 10000 },
  { name: "Hasan", wealth: 20000 },
  { name: "Ayse", wealth: 30000 },
  { name: "Omer", wealth: 700000 },
  { name: "Adnan", wealth: 500000 },
  { name: "Kerem", wealth: 200000 },
  { name: "Salih", wealth: 45000 },
  { name: "Cem", wealth: 121000 },
  { name: "Tarik", wealth: 156000 },
  { name: "Cemal", wealth: 178000 },
  { name: "Fatih", wealth: 856000 },
  { name: "Suna", wealth: 354000 },
  { name: "Azra", wealth: 556000 },
  { name: "Nuray", wealth: 900000 },
  { name: "Hatice", wealth: 123000 },
  { name: "Osman", wealth: 5000 },
];

const turkishPeople = new RichPersonList(data);

const addBtnElement = document.querySelector(".button__add");
const doubleBtnElement = document.querySelector(".button__double");
const showBtnElement = document.querySelector(".button__show");
const sortBtnElement = document.querySelector(".button__sort");
const calcBtnElement = document.querySelector(".button__calc");

addBtnElement.addEventListener("click", function () {
  turkishPeople.addUser();
});

doubleBtnElement.addEventListener("click", function () {
  turkishPeople.doubleMoney();
});

showBtnElement.addEventListener("click", function () {
  turkishPeople.showMillionaires();
});

sortBtnElement.addEventListener("click", function () {
  turkishPeople.sortByMoney();
});

calcBtnElement.addEventListener("click", function () {
  turkishPeople.calculateTotal();
});